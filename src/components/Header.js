import React from "react";
import HomeBg from "../static/img/quizBackground.jpeg";

export default function Header({ headerState, isAdmin }) {
  return (
    <>
      {headerState && isAdmin ? (
        <header
          className="masthead"
          style={{ backgroundImage: `url(${HomeBg})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Quiz 관리 페이지</h1>
                  <span className="subheading">관리자. 희자</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}
