import React from "react";

import fail_1 from "../static/img/fail_1.jpg";
import fail_2 from "../static/img/fail_2.jpg";
import fail_3 from "../static/img/fail_3.jpg";
import fail_4 from "../static/img/fail_4.jpg";
import fail_5 from "../static/img/fail_5.gif";
import fail_6 from "../static/img/fail_6.gif";

export default function Success() {
  const rndImg = () => {
    return Math.floor(Math.random() * (6 + 1 - 1) + 1);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>틀렸습니다!!!! 아하하하!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={
            rndImg() === 1
              ? fail_1
              : rndImg() === 2
              ? fail_2
              : rndImg() === 3
              ? fail_3
              : rndImg() === 4
              ? fail_4
              : rndImg() === 5
              ? fail_5
              : fail_6
          }
        />
      </div>
      <h2 style={{ textAlign: "center" }}>틀렸다구요!!!! 요호호호호!!!</h2>
    </>
  );
}
