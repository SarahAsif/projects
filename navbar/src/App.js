import React from "react";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <a href="/home">
        <h1>home</h1>
      </a>
      <a href="/about">
        {" "}
        <h1>about</h1>
      </a>
      <a href="/projects">
        <h1>projects</h1>
      </a>
      <a href="/contact">
        <h1>contact</h1>
      </a>
      <a href="/profile">
        <h1>profile</h1>
      </a>
    </>
  );
}

export default App;
