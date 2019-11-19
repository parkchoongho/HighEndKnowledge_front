import React from "react";

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
    }
  };

  return (
    <div className="caption" style={style.fromMargin}>
      <h1 style={style.title}>Create Quiz</h1>
      <hr />
      <form style={style.formContainer}>
        <div style={style.itemContainer}>
          <h3 style={style.item1}>Quiz Category.</h3>
          <select style={style.item3}>
            <option style={style.undisplay} selected>
              대분류
            </option>
            <option value="일반">일반</option>
            <option value="과학">과학</option>
            <option value="수학">수학</option>
            <option value="지리">지리</option>
            <option value="게임">게임</option>
          </select>
          <select style={style.item3}>
            <option style={style.undisplay} selected>
              소분류
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <hr />
        <div style={style.itemContainer}>
          <h1 style={style.item1}>Quiz Title.</h1>
          <input style={style.item2} type="text" placeholder="Quiz 제목" />
        </div>
        <hr />
        <div style={style.itemContainer}>
          <h2 style={style.item1}>Quiz Content</h2>
          <input style={style.item2} type="text" placeholder="Quiz 내용" />
        </div>
        <hr />
        <div style={style.itemContainer}>
          <div style={style.item1}>
            <p>Select1: </p>
            <input type="text" placeholder="선택지1" />
          </div>
          <div style={style.item1}>
            <p>Select2: </p>
            <input type="text" placeholder="선택지2" />
          </div>
          <div style={style.item1}>
            <p>Select3: </p>
            <input type="text" placeholder="선택지3" />
          </div>
          <div style={style.item1}>
            <p>Select4: </p>
            <input type="text" placeholder="선택지4" />
          </div>
        </div>
        <hr />
        <div style={style.itemContainer}>
          <p style={style.item1}>위도</p>
          <input style={style.item2} type="text" placeholder="위도" />
          <p style={style.item1}>경도</p>
          <input style={style.item2} type="text" placeholder="경도" />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={style.btnSubmit}
        >
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
}
