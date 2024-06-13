import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Offers from './components/Offers';
import DetailsSection from './components/DetailsSection';
import data from './json/Data.json';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner heading={data.bannerHeading}/>
      <Offers title={data.OfferTitle} desc={data.OfferDesc}/>
      {data?.offersData?.map((offer, index) => (
        <DetailsSection
          key={index}
          title={offer.title}
          stayDate={offer.stayDate}
          description={offer.description}
          benefits={offer.benefits}
          note={offer.note}
          terms={offer.terms}
          imageSrc={offer.imageSrc}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
