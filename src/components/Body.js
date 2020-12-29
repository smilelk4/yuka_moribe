import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Section from './Section';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Works from './Works';
import { Switch, Route } from 'react-router-dom';

const Body = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

    return (
      <main className="body">
        <Switch>
          <Route path='/about-me'>
            <AboutMe />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/works'>
            <Works />
          </Route>
        </Switch>
      </main>
    );
}
    

export default Body;