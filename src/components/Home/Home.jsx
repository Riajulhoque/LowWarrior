import React from 'react';
import Banner from '../Banner/Banner';
import Lowyers from '../Lowyers/Lowyers';
import { useLoaderData } from 'react-router';
import LawService from '../LawService/LawService';

const Home = () => {
  const data =useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <div className="bestLowyer">
      <h1>Our Best Lawyers</h1>
      <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
      <Lowyers data={data}></Lowyers>
      <LawService></LawService>
    </div>
  );
};

export default Home;