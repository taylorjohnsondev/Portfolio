import React, { useEffect, useState } from "react";
import Infobox from "./Infoboxes";

const Homepage = () => {
  const [animateMeSection, setAnimateMeSection] = useState(false);

  useEffect(() => {
    setAnimateMeSection(true);
  }, []);

  return (
    <section>
      <div className={`me ${animateMeSection ? "animate" : ""}`}>
        <img className="selfie" src="selfie.jpg" alt="Taylor Johnson Selfie" />
        <h1>Taylor Johnson</h1>
        <h3>Full-Stack Web Developer</h3>
        <p>
          19 year old Fullstack Developer from Florida, currently have a year of experience in Full Stack Web Development, the skills I use are below, thanks for checking out my
          portfolio!
        </p>
      </div>
      <Infobox />
    </section>
  );
};

export default Homepage;
