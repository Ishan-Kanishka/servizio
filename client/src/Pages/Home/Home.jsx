import React, {Fragment} from 'react';
import Hero from './Hero/Hero';
import Menu from './Menu/Menu';
import Event from './Event/Event';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Menu />
      <Event />
      <Testimonials />
    </Fragment>
  );
};

export default Home;
