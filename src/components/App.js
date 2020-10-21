import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [Note, update_note] = useState("");

  function showNotes() {
    update_note(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  }
  return (
    <div id="main">
      <button onClick={showNotes} id="click">
        showPara
      </button>
      <p id="para">{Note}</p>
    </div>
  );
}

export default App;
