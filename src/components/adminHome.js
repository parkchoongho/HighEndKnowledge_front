import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../common/config";
import Authaxios from "../common/authAxios";

import "../static/css/createQuiz.css";

export default function App() {
  const [quizs, setQuizs] = useState([]);
  const [page, setPage] = useState(1);

  const getQuizs = async (p = 1) => {
    const url = `${baseURL}/admin?page=${p}`;
    const { data } = await Authaxios().get(url);
    setQuizs(data.allQuizzes);
  };
  const getNextPage = async () => {
    await getQuizs(page + 1);
    setPage(page + 1);
  };
  const getAll = async () => {
    await getQuizs();
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              {quizs &&
                quizs.map((quiz, index) => (
                  <Link className="nav-link" to={`/quiz/${quiz._id}`}>
                    <div className="item1">
                      <h2>{index + 1}. </h2>
                    </div>
                    <div className="item2">
                      <h2 className="post-title">{quiz.title}</h2>
                      <h4 className="post-subtitle">{quiz.contents}</h4>
                      <p className="post-meta">
                        {quiz.tags.map(t => t + " ")} / {quiz.lat.toFixed(4)} /
                        {quiz.lon.toFixed(4)}
                      </p>
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
