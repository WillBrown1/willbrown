import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typewriter from 'typewriter-effect';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Willbrown1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/will-brown-66872b251/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          <h1>Will Brown</h1>
          <p>
            <Typewriter
              options={{
                strings: ["Full Stack Engineer", "Software Developer", "Tech Enthusiast", "Problem Solver"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
