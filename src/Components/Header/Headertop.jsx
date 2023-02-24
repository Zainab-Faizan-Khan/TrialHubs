import React from 'react';

import "./Headertop.css";
import phone from '../../images/phone.png';
import email from '../../images/email.png';
function Headertop() {
  
    return (
        
      <section id="mainConatiner" >
      <div className='open'>
          <p>Opening Hours:</p>
      </div>
      <div className='container'>
      <div className='email'>
      <img src= {email} className="phoneIcon" />
      <p>trialhubs@gmail.com</p>
      </div>
      <div className='phone'>
      <img src= {phone} className="phoneIcon" />
      <p>021 345 6789</p>
      </div>
      </div>
      </section>
      

    );
  }
  
  export default Headertop;