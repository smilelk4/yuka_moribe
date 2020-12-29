import React from 'react';

const Section = ({title, id, children}) => {
  return ( 
    <section id={id} className='section'>
      <h2 className='section__title'>{title}</h2>
      <div className='section__container'>{children}</div>
    </section>
  );
}
 
export default Section;