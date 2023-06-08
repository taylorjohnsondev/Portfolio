import "../Components/CSS/projects.css";
const Projects = () => {
  return (
    <section id="Projects">
      <h1>My Projects</h1>
      <article className="portfolio-item">
        <div className="portfolio-item-image">
          <img className="projects" src="memories.PNG" alt="Memories Booking" />
        </div>

        <h3>Memories Booking</h3>
        <h4>Developer/Backend</h4>
        <p>
          Group project made from scratch, it is a photographer booking website
          where you can create an account, get booked, upload photos, and
          receive reviews. Made using React, deployed using AWS EC2.
        </p>
        <a
          href="https://github.com/taylorjohnsondev/mern-capstone"
          className="btn"
        >
          Code
        </a>
      </article>
      <article className="portfolio-item">
        <div className="portfolio-item-image">
          <img className="projects" src="tgram.png" alt="Snippets" />
        </div>

        <h3>TGram</h3>
        <h4>Developer/Backend</h4>
        <p>
          A functional social media where you can make posts, similar to
          Instagram. You can edit your profile, and interact with other users
          and their posts. Made using React.
        </p>
        <button
          href="https://github.com/taylorjohnsondev/TGram"
          className="btn" 
        >
          Code
        </button>
      </article>
      <article className="portfolio-item">
        <div className="portfolio-item-image">
          <img className="projects" src="connect4.png" alt="Connect 4" />
        </div>

        <h3>Connect 4</h3>
        <h4>Developer</h4>
        <p>
          A group project that me and a another student worked on together, it
          is a game of connect 4 that tracks if you win in any direction. Made
          using JavaScript.
        </p>
        <a
          href="https://kenzieacademy-students.github.io/teamwork-assessment-connect-four-taylorjohnsondev/"
          className="btn"
        >
          Play
        </a>
      </article>
    </section>
  );
};

export default Projects;
