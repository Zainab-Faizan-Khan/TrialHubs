import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
  <section>
    <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
       <h4 className='about'>Our Vision</h4>
              <p className='about'>Be a leader in today’s research for better tomorrow! 
To create a future where knowledge is valued and used to benefit society.</p>
      </div>
      
      <div class="col-md-4">
        <h4>Contact Us</h4>
       <p> <FontAwesomeIcon icon={faMapMarkerAlt} />  123 Main Street, Anytown USA<br />
                <FontAwesomeIcon icon={faPhone} /> (555) 555-5555<br />
                <FontAwesomeIcon icon={faEnvelope} />  info@doctorapp.com</p>
      </div>
      <div class="col-md-4">
        <h4>Follow Us</h4>
        <ul class="social-icons">
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li> <a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li> <a href="#"><FontAwesomeIcon icon={faInstagram} />
                </a></li>
                <li> <a href="#"><FontAwesomeIcon icon={faLinkedin} />
                </a></li>
          </ul>
      </div>
    </div>
  </div>
  <div class="bottom-bar">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
        <div class="col-md-6">

        </div>
      </div>
    </div>
  </div>
</footer>

  </section>


   
  );
}

export default Footer;


    {/* <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h4 className='about'>Our Vision</h4>
              <p className='about'>Be a leader in today’s research for better tomorrow! <br/>
To create a future where knowledge is valued and used to benefit society.</p>
            </div>
            <div class="col-md-4">
              <h4>Contact Us</h4>
              <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />  123 Main Street, Anytown USA<br />
                <FontAwesomeIcon icon={faPhone} /> (555) 555-5555<br />
                <FontAwesomeIcon icon={faEnvelope} />  info@doctorapp.com
              </p>
            </div>
            <div class="col-md-4">
              <h4>Follow Us</h4>
              <div class="social-icons">

                <a href="#"><FontAwesomeIcon icon={faFacebook} />

                </a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
        </div>

      </footer> */}