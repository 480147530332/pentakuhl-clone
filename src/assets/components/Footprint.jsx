import React from 'react';
import '../../index.css'; // Make sure this points to your new styling sheet
import map from '../../assets/images/map.png'; 

const PentaSection = () => {
  const indiaOffices = [
    { city: "Mumbai", addr: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059", phone: "+91 22-6222-6222" },
    { city: "Ahmedabad", addr: "D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009", phone: "+91 7940227900" },
    { city: "Bengaluru", addr: "205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017", phone: "+91 80-4112-5590" },
    { city: "Chennai", addr: "Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114", phone: "+91-44-22241462 / 1464" },
    { city: "Delhi", addr: "Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037", phone: "+91 11-4078-2222" },
    { city: "Hyderabad", addr: "G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India", phone: "+91 40-2400-4048" },
    { city: "Kolkata", addr: "131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal", phone: "+91 33-2514-7089" },
  ];

  return (
    <div className="penta-container b">
      {/* Global Footprint Map */}
   

      {/* Offices Locations */}
      <section className="offices-section">
        <div className="office-grid-container">
          
          <div className="india-header">
            <h2>Our <span className="highlight">India</span> Offices</h2>
            <p className='text-black'>Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.</p>
          </div>

          <div className="offices-grid-wrapper">
            <div className="offices-grid">
              {indiaOffices.map((office, i) => (
                <div key={i} className="office-card">
                  <h3>{office.city}</h3>
                  <p>{office.addr}</p>
                  <span className="phone">{office.phone}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* USA Section */}
        <div className="usa-section">
          <div className="usa-content">
            <h2 className='text-black'>Our <span className="highlight">USA</span> Office</h2>
            <p className='text-black'>Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.</p>
          </div>
          <div className="usa-details">
            <h3>Chicago</h3>
            <p>Penta Freight PVT.LTD 5100 Newport Dr,<br />Suite 4, Rolling Meadows, IL 60008 USA</p>
            <span className="phone">+040 234 6559 / +224 434 2154</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PentaSection;