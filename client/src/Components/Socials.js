import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export const Socials = () => {
  return (
    <div>
      <a href="https://linkedin.com/in/taylorjohnsondev">
        <BsLinkedin />
      </a>
      <a href="https://github.com/taylorjohnsondev"><FaGithub/></a>
    </div>
  );
};

export default Socials;
