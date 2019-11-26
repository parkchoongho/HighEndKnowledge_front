import React from "react";

import success_1 from "../static/img/success_1.jpg";
import success_2 from "../static/img/success_2.jpg";
import success_3 from "../static/img/success_3.jpg";
import success_4 from "../static/img/success_4.jpg";
import success_5 from "../static/img/success_5.gif";
import success_6 from "../static/img/success_6.gif";

export default function Success() {
  const rndImg = () => {
    return Math.floor(Math.random() * (6 + 1 - 1) + 1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>쩡답!!! 오오오!!!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={
            rndImg() === 1
              ? success_1
              : rndImg() === 2
              ? success_2
              : rndImg() === 3
              ? success_3
              : rndImg() === 4
              ? success_4
              : rndImg() === 5
              ? success_5
              : success_6
          }
        />
      </div>
      <h2 style={{ textAlign: "center" }}>엄지척!! Gooooooood!!</h2>
    </>
  );
}
