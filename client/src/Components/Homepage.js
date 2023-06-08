import React, { useEffect, useState } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import Infobox from "./Infoboxes";
import Projects from "./Projects";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Homepage = () => {
  const [animateMeSection, setAnimateMeSection] = useState(false);

  useEffect(() => {
    setAnimateMeSection(true);
  }, []);

  const scrollToInfobox = () => {
    scroller.scrollTo("infoboxSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("projectSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToTop = () => {
    scroller.scrollTo("header", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <section>
      <div className={`me ${animateMeSection ? "animate" : ""}`}>
        <img className="selfie" src="selfie.jpg" alt="Taylor Johnson Selfie" />
        <h1>Taylor Johnson</h1>
        <h3>Full-Stack Web Developer</h3>
        <p>
          19 year old from Florida, currently have a year of experience in Full
          Stack Web Development, the skills I use are below, thanks for checking
          out my portfolio!
        </p>
        <button className="btn" onClick={scrollToInfobox}>
          View my Skills
        </button>
        <button className="btn" onClick={scrollToProjects}>
          View my Projects
        </button>
      </div>

      <div id="infoboxSection">
        <Infobox />
      </div>
      <div id="projectSection">
        <Projects />
      </div>
      <button className="arrow" onClick={scrollToTop}>
        <BsFillArrowUpCircleFill />
      </button>
    </section>
  );
};

export default Homepage;
