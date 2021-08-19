import React from "react";
import githubIcon from "../assets/githubicon.png";
import ProfilePic from "../assets/profile.jpg";
import linkedin from "../assets/linkedinicon.png";
import Footer from './Footer';


const AboutMe = () => {
  return (
    <div className="py-20 px-5 bg-green-800">
      <div className="about-me" id="About-Me">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-3xl p-5 text-center">About Me</h1>
              <hr />
              <p className="text-lg p-5">
                Hello there! My name is Devin, I am a Coding Bootcamp Graduate with a
                certificate from Bethel School of Technology, Full Stack program. I have used
                technologies like React Js, jQuery, HTML, CSS, JavaScript,
                MySql, Mongo DB, Axios, Ajax, Angular, Node, and many more.
                <br />
                <br />
                I have been interested in the tech world for a while now. In high school I started
                learning about the hardware and operating systems to a computer. About five years ago I
                was living in San Francisco, California and was around software developers all the time. I enjoyed
                how they are impacting the tech companies they were working for and I wanted to become apart of it.
                <br />
                <br />
                As a new developer, I am excited to dive into the tech industry and make an impact in any environment.
                <br />
                <br />
                In the next five years I see myself becoming a more experienced developer and breaking into the world of artifical intelligence.
              </p>
              <br />
             
              <a
                href="https://github.com/dmcmichae1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-thumbnail m-2 rounded"
                  src={githubIcon}
                  alt="GitHub Icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/devin-mcmichael-00b497166/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-thumbnail m-2 rounded"
                  src={linkedin}
                  alt="LinkedIn Icon"
                />
              </a>
              <div>
              <img
                className="w-80 object-right-bottom"
                alt="Devin"
                src={ProfilePic}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;