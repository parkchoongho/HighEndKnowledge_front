import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";
import Authaxios from "../common/authAxios";

import "../static/css/createQuiz.css";

export default function Quiz() {
  const [quizResult, setQuizResult] = useState(false);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");
  const [select4, setSelect4] = useState("");
  const [answer, setAnswer] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const addTag = async e => {
    e.preventDefault();
    setTags([...tags, tag]);
    setTag("");
  };

  const deleteTag = i => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      !e.target.title.value ||
      !e.target.contents.value ||
      !e.target.select1.value ||
      !e.target.select2.value ||
      !e.target.select3.value ||
      !e.target.select4.value ||
      !tags ||
      !e.target.answer.value ||
      !e.target.latitude.value ||
      !e.target.longitude.value
    ) {
      alert("모든 필드를 채워야합니다.");
      return;
    }

    const { data } = await Authaxios().patch(
      `${baseURL}/admin/modify/${document.location.href.split("/")[4]}`,
      {
        title: title,
        contents: contents,
        distracter: [select1, select2, select3, select4],
        tags: tags,
        answer: answer,
        lat: Number(lat),
        lon: Number(lon)
      }
    );

    if (data.result) {
      setQuizResult(true);
    } else {
      alert("퀴즈 제출 실패! 관리자에게 문의 부탁드려요.");
    }
  };

  const getQuizInfo = async () => {
    const { data } = await Authaxios().get(
      `${baseURL}/admin/modify/${document.location.href.split("/")[4]}`
    );
    const info = data.currentQuiz;
    setTitle(info.title);
    setContents(info.contents);
    setAnswer(info.answer);
    setLat(info.lat);
    setLon(info.lon);
    setTags(...tags, info.tags);
    setSelect1(info.distracter[0]);
    setSelect2(info.distracter[1]);
    setSelect3(info.distracter[2]);
    setSelect4(info.distracter[3]);
  };

  const quizDelete = async () => {
    const { data } = await Authaxios().delete(
      `${baseURL}/admin/delete/${document.location.href.split("/")[4]}`
    );
    setQuizResult(true);
  };

  useEffect(() => {
    getQuizInfo();
  }, []);

  return (
    <>
      {quizResult && <Redirect to="/admin/home" />}
      <div className="caption">
        <h1 className="title">Modify Quiz</h1>
        <hr />
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="itemContainer">
            <h3 className="item1">Quiz Category.</h3>
            <input
              type="text"
              value={tag}
              name="tag"
              onChange={e => setTag(e.target.value)}
              autoFocus
              className="item2"
              placeholder="추가할 Tag명"
            />
            <button className="btnBorderColor btn item1" onClick={addTag}>
              Add Tag
            </button>
          </div>
          <div>
            {tags.map((tag, i) => (
              <button
                className="btnBorderColor btn item1"
                onClick={() => deleteTag(i)}
              >
                {tags[i]}
              </button>
            ))}
          </div>
          <hr />
          <div className="itemContainer">
            <h1 className="item1">Quiz Title.</h1>
            <input
              className="item2"
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <hr />
          <div className="itemContainer">
            <h2 className="item1">Quiz Contents</h2>
            <input
              className="item2"
              type="text"
              name="contents"
              value={contents}
              onChange={e => setContents(e.target.value)}
            />
          </div>
          <hr />
          <div className="itemContainer">
            <div className="item1">
              <p>Select1: </p>
              <input
                type="text"
                name="select1"
                value={select1}
                onChange={e => setSelect1(e.target.value)}
              />
            </div>
            <div className="item1">
              <p>Select2: </p>
              <input
                type="text"
                name="select2"
                value={select2}
                onChange={e => setSelect2(e.target.value)}
              />
            </div>
            <div className="item1">
              <p>Select3: </p>
              <input
                type="text"
                name="select3"
                value={select3}
                onChange={e => setSelect3(e.target.value)}
              />
            </div>
            <div className="item1">
              <p>Select4: </p>
              <input
                type="text"
                name="select4"
                value={select4}
                onChange={e => setSelect4(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Answer: </p>
            <input
              type="text"
              name="answer"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
            />
          </div>
          <hr />
          <div className="itemContainer">
            <p className="item1">위도</p>
            <input
              className="item2"
              type="number"
              name="latitude"
              value={lat}
              onChange={e => setLat(e.target.value)}
              step="0.0000001"
            />

            <p className="item1">경도</p>
            <input
              className="item2"
              type="number"
              name="longitude"
              value={lon}
              onChange={e => setLon(e.target.value)}
              step="0.0000001"
            />
          </div>
          <div>
            <button type="submit" className="btnBorderColor btn btnSubmit">
              Edit
            </button>
            <button
              type="button"
              className="btnBorderColor btn btnSubmit"
              onClick={quizDelete}
            >
              Delete
            </button>
          </div>
        </form>
        <hr />
      </div>
    </>
  );
}

// rafce: Creates a React Arrow Function Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets);
// rfc: Creates a React Functional Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets);
