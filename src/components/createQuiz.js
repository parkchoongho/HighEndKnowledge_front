import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";
import getCookie from "../common/getCookie";
import Authaxios from "../common/authAxios";

export default function CreateQuiz() {
  const style = {
    formContainer: {
      display: "flex",
      flexDirection: "column", // 혹은 'column'
      padding: "20px 40px 20px 40px"
    },
    itemContainer: {
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center"
    },
    item1: {
      flexGrow: 1,
      alignItems: "flex-start",
      flexShrink: 1,
      marginRight: "10px"
    },
    item2: {
      flexGrow: 4,
      margin: "0 50px 0 50px"
    },
    item3: {
      flexGrow: 2,
      maxWidth: "100px",
      margin: "0 100px 0 100px"
    },
    title: {
      textAlign: "left"
    },
    undisplay: {
      display: "none"
    },
    btnSubmit: {
      maxWidth: "20%"
    },
    tagbtn: {
      padding: "5px 5px 5px 5px",
      width: "100px",
      borderRadius: "15%",
      margin: "0 5px 0 5px"
    }
  };

  const [quizResult, setQuizResult] = useState(false);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = async e => {
    e.preventDefault();
    setTags([...tags, tag]);
    setTag("");
  };

  const deleteTag = i => {
    i.preventDefault();
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

    const { data } = await Authaxios().post(`${baseURL}/admin/quiz`, {
      title: e.target.title.value,
      contents: e.target.contents.value,
      distracter: [
        e.target.select1.value,
        e.target.select2.value,
        e.target.select3.value,
        e.target.select4.value
      ],
      tags: tags,
      answer: e.target.answer.value,
      lat: Number(e.target.latitude.value),
      lon: Number(e.target.longitude.value)
    });

    if (data.result) {
      setQuizResult(true);
    } else {
      alert("퀴즈 제출 실패! 관리자에게 문의 부탁드려요.");
    }
  };

  return (
    <>
      {quizResult && <Redirect to="/" />}
      <div className="caption" style={style.fromMargin}>
        <h1 style={style.title}>Create Quiz</h1>
        <hr />
        <form style={style.formContainer} onSubmit={handleSubmit}>
          <div style={style.itemContainer}>
            <h3 style={style.item1}>Quiz Category.</h3>
            <input
              type="text"
              value={tag}
              name="tag"
              onChange={e => setTag(e.target.value)}
              autoFocus
              style={style.item2}
              placeholder="추가할 Tag명"
            />
            <button
              className="btn btn-success"
              style={(style.item1, style.tagbtn)}
              onClick={addTag}
            >
              Add Tag
            </button>
          </div>
          <div>
            {tags.map((tag, i) => (
              <button
                className="btn btn-primary"
                style={(style.item1, style.tagbtn)}
                onClick={() => deleteTag(i)}
              >
                {tags[i]}
              </button>
            ))}
          </div>
          <hr />
          <div style={style.itemContainer}>
            <h1 style={style.item1}>Quiz Title.</h1>
            <input
              style={style.item2}
              type="text"
              name="title"
              placeholder="Quiz 제목"
            />
          </div>
          <hr />
          <div style={style.itemContainer}>
            <h2 style={style.item1}>Quiz Contents</h2>
            <input
              style={style.item2}
              type="text"
              name="contents"
              placeholder="Quiz 내용"
            />
          </div>
          <hr />
          <div style={style.itemContainer}>
            <div style={style.item1}>
              <p>Select1: </p>
              <input type="text" name="select1" placeholder="선택지1" />
            </div>
            <div style={style.item1}>
              <p>Select2: </p>
              <input type="text" name="select2" placeholder="선택지2" />
            </div>
            <div style={style.item1}>
              <p>Select3: </p>
              <input type="text" name="select3" placeholder="선택지3" />
            </div>
            <div style={style.item1}>
              <p>Select4: </p>
              <input type="text" name="select4" placeholder="선택지4" />
            </div>
          </div>
          <div>
            <p>Answer: </p>
            <input type="text" name="answer" placeholder="답" />
          </div>
          <hr />
          <div style={style.itemContainer}>
            <p style={style.item1}>위도</p>
            <input
              style={style.item2}
              type="number"
              name="latitude"
              placeholder="위도"
              step="0.0000001"
            />
            <p style={style.item1}>경도</p>
            <input
              style={style.item2}
              type="number"
              name="longitude"
              placeholder="경도"
              step="0.0000001"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={style.btnSubmit}
          >
            Send
          </button>
        </form>
        <hr />
      </div>
    </>
  );
}
