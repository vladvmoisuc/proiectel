import React from 'react';
import { ABOUT_URL } from '../../constants/values';
import './styles.scss';

const About = () => {
  return (
    <main className="about container">
      <img className="about_image" src={ABOUT_URL} />
    </main>
  );
};

export default About;
