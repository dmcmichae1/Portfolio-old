import React from "react";
import githubIcon from "../assets/githubicon.png";
import ProfilePic from "../assets/profile.jpg";
import Header from './Header';

const AboutMe = () => {
  return (
    <div> <Header />
      <div className="about-me" id="About-Me">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="aboutMe-title">About Me</h1>
              <p className="lead">Changing the world through tech</p>
              <hr />
              <p className="about-me-text">
                Hi there! My name is Devin, I am a Coding Bootcamp Graduate with a
                certificate from Bethel School of Technology, Full Stack program. I have used
                technologies like React Js, jQuery, HTML, CSS, JavaScript,
                MySql, Mongo DB, Axios, Ajax, Angular, Node, and many more.
                <br />
                <br />
                I have been interested in the tech world for a while now. In high school I started
                learning about the hardware and operating systems to a computer. About five years ago I
                was living in San Francisco, California and was around software developers all the time. I enjoyed
                how they are impacting the tech companies they were working for and I wanted to become apart of it.
              </p>
              <p>
                As a new developer I am excited to dive into the tech industry and
                ready to learn and make an impact in any environment.
                <br />
                <br />
                In five years I see myself becoming a more experienced developer and breaking into the world of artifical intelligence.
              </p>
              <br />
              <a
                href="https://github.com/dmcmichae1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-thumbnail m-2"
                  src={githubIcon}
                  alt="GitHub Icon"
                />
              </a>
              <a
                href="https://docs.google.com/document/d/1maNpkxa5KXVrUPQFLhxNPJLqK-fk-TtTDdIiw01sqrk/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </div>
            <div className="col imgCon">
              <img
                className="rounded profile-picture"
                alt="Devin"
                src={ProfilePic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;