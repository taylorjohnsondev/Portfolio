import "./index.css";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import React from "react";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
};

export default App;
