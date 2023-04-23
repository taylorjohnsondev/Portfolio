import React from "react";
import Infobox from "./Infoboxes";
const Homepage = () => {
  return (
    <section>
      <img className="selfie" src="selfie.jpg" alt="Taylor Johnson Selfie"/>
      <h1>Taylor Johnson</h1>
      <h3>Fullstack Developer</h3>
      <br />
      <br />
      <br />
      <div className="projects-container">
        <article className="portfolio-item">
          <h2> About me</h2>
          <p>
            19 year old Fullstack Developer who is still learning, have about a
            year experience from Kenzie Academy, I love to design websites and
            be creative.
          </p>
          <p>Some hobbies of mine are gaming, and coding on my own time.</p>
        </article>
      </div>

      <Infobox />
    </section>
  );
}; 

export default Homepage;
