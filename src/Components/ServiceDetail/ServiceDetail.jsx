import React from 'react';
import "../Service/Service.css"
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <img src={service.img} alt=""/>
            <h4 className='heading'>{service.name}</h4>
            <p className="text">{service.desc}</p>
        </div>
    );
};

export default ServiceDetail;