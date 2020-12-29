import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="header">
      <div className="header__diagonal-container"></div>
      <div className="header__title-container">
          <h1 data-aos="fade-right">Yuka Moribe</h1>
          <p data-aos="fade-left">FullStack Software Engineer - HTML | CSS | JavaScript | Python</p>
      </div>
      <div className="header__icon-container">
        <a href='https://github.com/smilelk4' target='_blank'><GitHubIcon fontSize='large'/></a>
        <a href='https://www.linkedin.com/in/yuka-moribe-485962157/' target='_blank'><LinkedInIcon fontSize='large'/></a>
      </div>
    </div>
  );
}


export default Header;