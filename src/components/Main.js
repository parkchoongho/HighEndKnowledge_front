import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../static/css/animationText.css";

export default function Main(quizs, getNextPage) {
  // const setup = () => {
  //   var e = document.getElementById("watchme");
  //   e.addEventListener("animationstart", listener, false);
  //   e.addEventListener("animationend", listener, false);
  //   e.addEventListener("animationiteration", listener, false);

  //   var e = document.getElementById("watchme");
  //   e.className = "slidein";
  // };

  // useEffect(() => {
  //   setup();
  // }, []);
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
                className={`nav-link tracking-in-expand-fwd quiz-border quizs-size quiz-text div${index +
                  1}`}
                to={`/solve/${quiz._id}`}
              >
                <h2>{index + 1}. </h2>
                <h2 className="post-title">{quiz.title}</h2>
                <h4 className="post-subtitle">{quiz.contents}</h4>
                <p className="post-meta">{quiz.tags.map(t => t + " ")}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
