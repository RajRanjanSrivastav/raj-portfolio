import React, { Profiler } from "react";
import {
  AiFillGithub,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";
import profile from "../assets/profile.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={profile} alt="profile" />
        <h2>Raj Ranjan Srivastav</h2>
        <p>
         A self motivated engineering student who loves to solve problems on coding platforms and develop front-end of web applications.
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          {/* <a href="" target={"blank"}>
            <AiFillInstagram />
          </a> */}
          <a href="https://github.com/RajRanjanSrivastav" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/raj-ranjan-srivastav-40067b1b7/" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
