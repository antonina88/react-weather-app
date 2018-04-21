import React from 'react';
import Header from './header.jsx';
import WeatherData from './weatherdata.jsx';
import Diagram from './Diagram.jsx';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <WeatherData />
        <Diagram />
      </div>
      <Footer />
    </div>
  );
};

export default App;
