import React from 'react';
import Header from '../../common/Header';
import HomeSlider from '../../components/HomeSlider';
import Features from '../../components/Features';
import Product from '../../components/Product';

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeSlider/>
        <Features/>
        <Product/>
    </div>
  )
}

export default Home;