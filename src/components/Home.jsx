import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import main from "../assets/main.webp";
// import resume from "."

const Home = () => {
  //   const onButtonClick = () => {
  //     // using Java Script method to get PDF file
  //     fetch('resume.pdf').then(response => {
  //         response.blob().then(blob => {
  //             // Creating new object of PDF file
  //             const fileURL = window.URL.createObjectURL(blob);
  //             // Setting various property values
  //             let alink = document.createElement('a');
  //             alink.href = fileURL;
  //             alink.download = 'resume.pdf';
  //             alink.click();
  //         })
  //     })
  // }

  const projectCounts = useRef(null);
  const projectAnimate = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (projectCounts.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Raj Ranjan Srivastav
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:srivastavrajranjan75@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +<span>100</span>
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                <motion.span whileInView={projectAnimate} ref={projectCounts}>
                  50
                </motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>
                <span>Contact</span>
              </p>
              <span>srivastavrajranjan75@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={main} alt="raj" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
