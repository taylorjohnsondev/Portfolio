import React from "react";
import Infobox from "./Infoboxes";
const Homepage = () => {
  return (
    <section>
      <div className="me">
        <img className="selfie" src="selfie.jpg" alt="Taylor Johnson Selfie" />
        <h1>Taylor Johnson</h1>
        <h3>Full-Stack Web Developer</h3>
        <p>
          19 year old Fullstack Developer from Florida, have about a year
          experience from Kenzie Academy, I love to design websites and make
          them perfect. The skills I use are below, thanks for checking out my
          portfolio!
        </p>
      </div>
      <Infobox />
    </section>
  );
};

export default Homepage;
