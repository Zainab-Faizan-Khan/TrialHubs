import React from 'react';
import "./Service.css";
import flouride from '../../images/flouride.png';
import cavity from '../../images/cavity.png';
import teath from '../../images/teath.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
  {
      name: 'Study Matching',
      img: flouride,
      desc:' We do the legwork to find studies appropriate for your patient populations. We go beyond by ensuring that your site and staff are prepared – at no cost to you.'
  },
  {
      name: 'Contract & Budget Negotiation',
      img: cavity,
      desc:'We negotiate budgets, and create profitability models to ensure the study is executable, and generate a surplus for your medical institution.'
  },
  {
      name: 'Study Oversight',
      img: teath,
      desc:'We oversee study operations from study startup to closeout. This includes IRB submissions, regulatory document management, recruitment and quality management.'
  }
]

const Services = () => {
  return (
      <section className="services-container mt-5" id="services">
          <div className="text-center">
              <h1 className="h1">OUR SERVICES</h1>
              <h2 className="h2">Services We Provide</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
              <div className="service">
                  {
                      serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                  }
              </div>
          </div>
      </section>
  );
};

export default Services;