import React from 'react';
import Section from './Section';

const AboutMe = () => {
  return ( 
    <Section title='About Me' id='about_me'>
        <div className='prof_img'></div>
        <div className='section__description'>
          <p>
            Yuka Moribe is currently studying and practicing programming daily.{" "}
            <br />
            Having experience in art and travel industry, she seeks to combine her past experiences to programming.<br />
          </p>
        </div>
    </Section>
  );
}
 
export default AboutMe;