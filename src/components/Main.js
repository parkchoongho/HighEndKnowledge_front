import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../static/css/animationText.css";

export default function Main(quizs, getNextPage) {
  console.log(Screen.width);
  return (
    <>
      <h1
        className="tracking-in-expand-fwd text-object anim-object.active"
        style={{ display: "block", zIndex: "905" }}
      >
        Q u i z s
      </h1>
      <div className="parent-body-flex">
        <div className="body-container parent">
          {quizs.quizs &&
            quizs.quizs.map((quiz, index) => (
              <Link
                className={`nav-link tracking-in-expand-fwd quiz-border quizs-size div${index +
                  1}`}
                to={`/solve/${quiz._id}`}
              >
                <h5 className="media-index">{index + 1 + ". "}</h5>
                <h3 className="post-title media-h3">{quiz.title}</h3>
                <p className="post-meta quiz-text media-tag">
                  {quiz.tags.map(t => "#" + t + " ")}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
