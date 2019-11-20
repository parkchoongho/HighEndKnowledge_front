import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";

export default function Login({ setIsLoggedIn, setIsAdmin, history }) {
  const [loginState, setLoginState] = useState("init");

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await axios.post(`${baseURL}/auth/login`, {
      name: e.target.name.value,
      password: e.target.password.value
    });

    if (!data.result) {
      setLoginState("failed");
    } else {
      const { exp } = JSON.parse(
        atob(data.token.split(".")[1]) // Base64 decoding
      );
      const expires = new Date(exp * 1000).toUTCString();
      document.cookie = `Authorization=JWT ${data.token}; expires=${expires}`;
      setIsAdmin(data.admin);
      setIsLoggedIn(true);
      setLoginState("success");
    }
  };

  return (
    <>
      {loginState === "success" ? <Redirect to="/" /> : null}
      <form onSubmit={handleSubmit}>
        <small>
          {loginState === "failed" && "이름(ID) 혹은 비밀번호를 확인하세요."}
        </small>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name(ID)</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Name(ID)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push("/join")}
        >
          Sign in
        </button>
      </form>
    </>
  );
}
