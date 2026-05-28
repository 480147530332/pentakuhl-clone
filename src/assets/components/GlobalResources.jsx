import React from 'react';
import "../../index.css";
import map from '../../assets/images/map.png';

const GlobalFootprint = () => {
  return (
    <section className="global-footprint-section py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
    
      <div className="map-container">
            <h2 className="global text-3xl md:text-4xl">
         Our Global Footprint
       </h2>
           <img src={map} alt="Global Footprint Map" className="footprint-map" />
         </div>
    
  </div>
</section>
  );
};

export default GlobalFootprint;