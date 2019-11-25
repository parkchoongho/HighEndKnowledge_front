import React from "react";
import { Link, useParams } from "react-router-dom";

import "../static/css/createQuiz.css";

export default function Main(quizs, getNextPage) {
  return (
    <>
      {/* {<GMap quiz={quizs.quizs} />} */}
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              {quizs.quizs &&
                quizs.quizs.map((quiz, index) => (
                  <Link className="nav-link" to={`/solve/${quiz._id}`}>
                    <div className="item1">
                      <h2>{index + 1}. </h2>
                    </div>
                    <div className="item2">
                      <h2 className="post-title">{quiz.title}</h2>
                      <h4 className="post-subtitle">{quiz.contents}</h4>
                      <p className="post-meta">{quiz.tags.map(t => t + " ")}</p>
                    </div>
                  </Link>
                ))}
            </div>
            <hr />
            <div className="clearfix">
              <h2 className="copyright"> 1 2 3 4 5</h2>
              <button
                type="button"
                className="btn btn-primary float-right"
                onClick={() => {
                  getNextPage();
                }}
              >
                Older Posts &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
