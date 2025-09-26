import React, {Fragment} from 'react';
import MainLayout from '../../layout/MainLayout';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <Fragment>
      <MainLayout>
        <Hero />
      </MainLayout>
    </Fragment>
  );
};

export default Home;
