import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";
import Authaxios from "../common/authAxios";

class Solve extends Component {
  state = {
    isLoading: true,
    title: "",
    contents: "",
    distracter: [],
    tags: [],
    answer: "",
    ansState: 0
  };
  getQuiz = async () => {
    const {
      data: {
        currentQuiz: { title, contents, distracter, tags }
      }
    } = await Authaxios().get(
      `${baseURL}/api/quiz/${document.location.href.split("/")[4]}`
    );
    this.setState({ title, contents, distracter, tags, isLoading: false });
    // console.log(this.state);
  };
  handleSolve = async e => {
    e.preventDefault();
    const res = await Authaxios().post(
      `${baseURL}/api/quiz/${document.location.href.split("/")[4]}`,
      { selectAns: this.state.answer }
    );

    if (res.data.result) {
      this.setState({ ansState: 1 });
    } else {
      this.setState({ ansState: 2 });
    }
  };

  componentDidMount() {
    this.getQuiz();
  }
  render() {
    const {
      title,
      contents,
      distracter,
      isLoading,
      tags,
      ansState
    } = this.state;
    return (
      <>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : ansState === 0 ? (
          <div>
            <h1>{title}</h1>
            {tags.map(tag => (
              <span>{tag}</span>
            ))}
            <h2>{contents}</h2>
            <ol>
              {distracter.map(ele => (
                <li>
                  <span>{ele}</span>
                </li>
              ))}
            </ol>
            <form onSubmit={this.handleSolve}>
              <input
                type="text"
                value={this.state.answer}
                onChange={e => this.setState({ answer: e.target.value })}
              ></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        ) : ansState === 1 ? (
          <div>맞았습니다.</div>
        ) : (
          <div>틀렸습니다.</div>
        )}
      </>
    );
  }
}

export default Solve;
