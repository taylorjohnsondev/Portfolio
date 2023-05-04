import "../Components/CSS/infobox.css";
import { DiReact } from "react-icons/di";
import { SiHtml5, SiMongodb, SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Infobox = () => {
  return (
    <section id="Projects">
      <h1>My Skills</h1>
      <div className="projects-container">
        <article className="portfolio-item">
          <DiReact />
          <h3>React</h3>
        </article>
        <article className="portfolio-item">
          <SiMongodb />
          <h3>MongoDB</h3>
        </article>
        <article className="portfolio-item">
          <IoLogoNodejs />
          <h3>Node.js</h3>
        </article>
        <article className="portfolio-item">
          <SiExpress/>
          <h3>Express</h3>
        </article>
        <article className="portfolio-item">
          <FaCss3Alt />
          <h3>CSS</h3>
        </article>
        <article className="portfolio-item">
          <SiHtml5 />
          <h3>HTML 5</h3>
        </article>
      </div>
    </section>
  );
};

export default Infobox;
