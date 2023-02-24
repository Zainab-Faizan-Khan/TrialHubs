import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
