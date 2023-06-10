import "../Components/CSS/infobox.css";
import { DiReact, DiJavascript, DiHtml5 } from "react-icons/di";
import {  SiMongodb, SiExpress } from "react-icons/si";
import { FaCss3Alt, FaAws, FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Infobox = () => {
  return (
    <section id="Projects">
      <h1>My Skills</h1>
      <div className="infoboxes-container">
        <article className="infobox-item">
          <DiReact />
          <h3>React</h3>
        </article>
        <article className="infobox-item">
          <DiJavascript />
          <h3>JavaScript</h3>
        </article>
        <article className="infobox-item">
          <IoLogoNodejs/>
          <h3>Node.js</h3>
        </article>
        <article className="infobox-item">
          <SiExpress/>
          <h3>Express</h3>
        </article>
        <article className="infobox-item">
          <DiHtml5 />
          <h3>HTML 5</h3>
        </article>
        <article className="infobox-item">
          <FaAws />
          <h3>AWS</h3>
        </article>
        <article className="infobox-item">
          <FaBootstrap />
          <h3>Bootstrap</h3>
        </article>
        <article className="infobox-item">
          <FaCss3Alt />
          <h3>CSS</h3>
        </article>
        <article className="infobox-item">
          <SiMongodb />
          <h3>MongoDB</h3>
        </article>
      </div>
    </section>
  );
};

export default Infobox;
