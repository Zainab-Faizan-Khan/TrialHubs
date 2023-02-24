import { useState, useEffect } from 'react';
import './Home.css'; // import your CSS file here
import slide1 from "../../images/slide2.jpg"
import slide2 from '../../images/dr.jpg'
import slide3 from "../../images/slide3.jpg"
function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    slide1,
    slide2,
    slide3
  ];
  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <div className="home-page">
      <div className="background-image">
        <img src={slides[slideIndex]} />
      </div>
      <div className="content">
        <h1>Our Mission</h1>
        <p className='details'>Trials Hub’s mission is to provide exceptional services to our clients, and to set the standard of excellence in coordinating clinical trials. Our aim is to advance research innovation, establish ourselves and our team of top-notch consultant as leaders in clinical research.</p>
        <div className='button'>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </div>
  );
}
export default Home