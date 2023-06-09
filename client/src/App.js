import "./index.css";
import Resume from "./Components/Resume";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import React from "react";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/resume" element={<Resume />}></Route>
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </>
  );
};

export default App;
