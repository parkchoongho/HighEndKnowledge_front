import React from "react";
import { Link, useParams } from "react-router-dom";
import { baseURL } from "../common/config";
import Authaxios from "../common/authAxios";

export default function Main(quizs, getNextPage) {
  const styles = {
    container: {
      display: "inline-flex",
      flexDirection: "row", // 혹은 'column'
      // alignContent: "center",
      alignItems: "baseline",
      maxWidth: "90%"
    },
    item1: {
      flexGrow: 1,
      alignItems: "flex-start",
      flexShrink: 1,
      marginRight: "10px"
    },
    item2: {
      flexGrow: 4,
      alignItems: "flex-end",
      flexShrink: 2
    }
  };

  // const res = async () => {
  //   const list = await Authaxios().get(`${baseURL}/admin`);
  //   // console.log(list.data.allQuizzes[0]);
  //   const mapList = list.map();
  //   console.log(mapList);
  // };
  // res();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            {quizs &&
              quizs.map(quiz => (
                <Link
                  className="nav-link"
                  to={`/quiz/${quizs._id}`}
                  style={styles.container}
                >
                  <div style={styles.item1}>
                    <h2>1</h2>
                  </div>
                  <div style={styles.item2}>
                    <h2 className="post-title">Quiz - Title</h2>
                    <h3 className="post-subtitle">Quiz -</h3>
                    <p className="post-meta">
                      Quiz ID / Quiz Category / Quiz Date / Latitude, Longitude
                      /
                    </p>
                  </div>
                </Link>
              ))}
            <hr />
            <Link
              className="nav-link"
              to={`/quiz/${quizs._id}`}
              style={styles.container}
            >
              <div style={styles.item1}>
                <h2>2</h2>
              </div>
              <div style={styles.item2}>
                <h2 className="post-title">Quiz - Title</h2>
                <h3 className="post-subtitle">Quiz -</h3>
                <p className="post-meta">
                  Quiz ID / Quiz Category / Quiz Date / Latitude, Longitude /
                </p>
              </div>
            </Link>
            <hr />
            <Link
              className="nav-link"
              to={`/quiz/${quizs._id}`}
              style={styles.container}
            >
              <div style={styles.item1}>
                <h2>3</h2>
              </div>
              <div style={styles.item2}>
                <h2 className="post-title">Quiz - Title</h2>
                <h3 className="post-subtitle">Quiz -</h3>
                <p className="post-meta">
                  Quiz ID / Quiz Category / Quiz Date / Latitude, Longitude /
                </p>
              </div>
            </Link>
            <hr />
            <Link
              className="nav-link"
              to={`/quiz/${quizs._id}`}
              style={styles.container}
            >
              <div style={styles.item1}>
                <h2>4</h2>
              </div>
              <div style={styles.item2}>
                <h2 className="post-title">Quiz - Title</h2>
                <h3 className="post-subtitle">Quiz -</h3>
                <p className="post-meta">
                  Quiz ID / Quiz Category / Quiz Date / Latitude, Longitude /
                </p>
              </div>
            </Link>
            <hr />
            <Link
              className="nav-link"
              to={`/quiz/${quizs._id}`}
              style={styles.container}
            >
              <div style={styles.item1}>
                <h2>5</h2>
              </div>
              <div style={styles.item2}>
                <h2 className="post-title">Quiz - Title</h2>
                <h3 className="post-subtitle">Quiz -</h3>
                <p className="post-meta">
                  Quiz ID / Quiz Category / Quiz Date / Latitude, Longitude /
                </p>
              </div>
            </Link>
          </div>
          <hr />

          <div className="clearfix">
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
  );
}
