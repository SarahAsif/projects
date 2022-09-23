import "./App.css";
import React from "react";
import Nav from "./comp/Nav";
import Header from "./comp/Header";
import Details from "./comp/Details";
import About from "./comp/About";
import Class from "./comp/Class";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Details />
      <About />
      <Class />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
