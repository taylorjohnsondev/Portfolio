import "../Components/CSS/resume.css";

const Resume = () => {
  return (
    <section>
      <img id="resume" src="resume1.png" alt="Taylors Resume" />
      <img id="resume" src="resume2.png" alt="Taylors Resume" />
      <a
          href="https://docs.google.com/document/d/1rwTK9PQ0PrmdLoD4uJWRWNaI4_npHHAhxYrLUYgPsbQ/edit?usp=sharing"
          className="btn" 
        >
          View on Google Docs
        </a>
    </section>
  );
};

export default Resume;
