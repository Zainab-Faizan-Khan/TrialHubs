import React from 'react';
import './Navbar.css';
import Headertop from '../Header/Headertop';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../images/logo.png';
function Navbar  ()  {
  const [isSticky, setSticky] = useState(false)
  const [expanded, setExpanded] = useState(false);

      useEffect(() => {
          window.addEventListener("scroll", () => {
              if (window.scrollY > 50) {
                  setSticky(true)
              } else {
                  setSticky(false)
              }
          })
      }, [])
      useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
            setExpanded(true);
          } else {
            setExpanded(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
      <section>
        <Headertop/>
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`}>
          <nav className={expanded ? 'nav expanded' : 'nav'}>
        <aside className="brand-name">
          <img className="logo" src={logo}/>
          <div class="nav-links">
          <span className={expanded ? 'logo-name expanded' : 'logo-name'} >Trial Hubs</span>
          </div>
        </aside>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        </nav>
        
      </nav>
      </section>
     
    );
};

export default Navbar;

