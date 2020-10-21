import React, { Component, useState } from "react";
import "./../styles/App.css";

var cnt = 0;
export default function App() {
  function showNotes() {
    if (cnt == 1) return;
    let p = document.createElement("p");
    p.id = "para";
    p.innerText =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

    let dv = document.getElementById("main");
    dv.appendChild(p);
    cnt++;
  }

  return (
    <div id="main">
      <button onClick={showNotes} id="click">
        showPara
      </button>
    </div>
  );
}
