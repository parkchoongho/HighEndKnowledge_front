import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";

export default function Join() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(false);
  const [joinResult, setjoinResult] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isPasswordSame) {
      alert("Password Check. plz/");
      return;
    }

    if (password.length < 3 || password2.length < 3) {
      alert("Password Length is short! 3~30word plz");
      return;
    }

    if (
      !e.target.name.value ||
      !password ||
      !password2 ||
      !e.target.birth.value ||
      !e.target.gender.value
    ) {
      alert("모든 필드를 채워야합니다.");
      return;
    }

    const { data } = await axios.post(`${baseURL}/auth/join`, {
      name: e.target.name.value,
      password,
      birth: e.target.birth.value,
      gender: e.target.gender.value
    });
    if (data.result) {
      setjoinResult(true);
    } else {
      alert("회원가입 실패! 관리자에게 문의 부탁드려요.");
    }
  };

  return (
    <>
      {joinResult && <Redirect to="/" />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            autoFocus
            placeholder="Use Name(ID)"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              setIsPasswordSame(e.target.value === password2);
            }}
          />
        </div>
        <div className="form-group">
          <label>Check Password</label>
          <input
            type="password"
            className="form-control"
            name="password2"
            placeholder="Check Password"
            value={password2}
            onChange={e => {
              setPassword2(e.target.value);
              setIsPasswordSame(e.target.value === password);
            }}
          />
          <small>
            {isPasswordSame ? "좋아!" : "Password가 일치하지 않습니다."}
          </small>
        </div>
        <div className="form-group">
          <label>Brith</label>
          <input
            type="text"
            className="form-control"
            name="birth"
            placeholder="Your Birth. Ex) 1999-02-02"
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            placeholder="Your Gender. Ex) male/female"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
