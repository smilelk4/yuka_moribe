import React from 'react';
import Section from './Section';

const Skills = () => {
  return (
    <>
      <Section title='Frontend Skills' id='frontend'>
            <div className='section__description'>
              <p>
                JavaScript: React/React Hooks, Redux, React Router, Pug
                <br />
                Python: Flask-WTF, Jinja2
                <br />
                Styling: SASS/SCSS
              </p>
            </div>
      </Section>

      <Section title='Backend Skills' id='backend'>
        <div className='section__description'>
          <p>
            JavaScript: Node, Express, Sequelize
            <br />
            Python: Flask, Flask-Migrate, Alembic
          </p>
        </div>
      </Section>
    </>
  );
}
 
export default Skills;