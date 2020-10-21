import React, { Component, useState } from "react";
import "./../styles/App.css";

export default function App() {
  function showNotes() {
    let p = document.createElement("p");
    p.id = "para";
    p.innerText =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

    let dv = document.getElementById("main");
    dv.appendChild(p);
  }

  return (
    <div id="main">
      <button onClick={showNotes} id="click">
        showPara
      </button>
    </div>
  );
}
