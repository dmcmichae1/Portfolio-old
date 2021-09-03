import React from "react";
import githubIcon from "../assets/githubicon.png";
import linkedin from "../assets/linkedinicon.png";
import resumeicon from "../assets/resumeicon.png";

const Footer = () => {
  return (
    <footer className="footer-wraper top-line m-1">
      <div className="footer navbar-dark bg-dark">
        <div className="footer-copyright text-center py-3 text-muted">
          © 2021 Copyright:
          <a href="https://choosealicense.com/licenses/mit/"> MIT licenses</a>
        </div>
        <div className="react-footer">
          <h3>Made with React Js</h3>
          <p>Link to Github Repo for portfolio, resume, and LinkedIn</p>
          <a className="portfolio"
            href="https://github.com/dmcmichae1/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <img className="git"
              className="img-thumbnail m-2 rounded"
              src={githubIcon}
              alt="GitHub Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/devin-mcmichael"
            target="_blank"
            rel="noreferrer"
          >
            <img className="linkedin"
              className="img-thumbnail m-2 rounded"
              src={linkedin}
              alt="LinkedIn Icon"
            />
          </a>
          <a className="resume"
            href="https://docs.google.com/document/d/1QMkE5aQw5DFbrRMhQzDeD8yh5bkGBz7t2KI3E1kjvlI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img className="resume"
              className="img-thumbnail m-2 rounded"
              src={resumeicon}
              alt="Resume Icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
