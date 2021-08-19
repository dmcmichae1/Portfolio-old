import React from "react";
import githubIcon from "../assets/githubicon.png";
import linkedin from "../assets/linkedinicon.png";

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
            <p>Link to Github Repo for portfolio and LinkedIn</p>
          <a className=""
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
                href="https://www.linkedin.com/in/devin-mcmichael-00b497166/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkedin"
                  className="img-thumbnail m-2 rounded"
                  src={linkedin}
                  alt="LinkedIn Icon"
                />
              </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
