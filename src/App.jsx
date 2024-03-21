//import "./css/style.css"; 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import LandingPage from "./components/LandingPage";

export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Add an event listener to check the scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButton = scrollY > 200; // Adjust the value based on when you want to show the button
      setShowScrollButton(showButton);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  return (
    <>
      <NavBar />
      {showScrollButton && (
        <FontAwesomeIcon icon={faArrowUp} size="xl" onClick={handleScrollUp} className="scroll-up-btn" />
      )}
      <LandingPage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

