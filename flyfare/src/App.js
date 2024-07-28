import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection';
import NHeroSection from './components/NHeroSection';
import About from './components/about/about';
import BlogPage from './components/blogs/blog';
import ContactPage from './components/contact/contactpage';
import CommunityApp from './components/community/community';
import Login from './components/loginform/login';
import Signup from './components/loginform/signup';
import './App.css';
import CommunityApp2 from './components/community/Cside/c2';
import Footer from './components/Footer/Footer';
import Footer1 from './components/Footer/Footer1';

function App() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    let mouse = { x: 300, y: 300 };
    let pos = { x: 0, y: 0 };
    const speed = 0.1;

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };

    const updateCoordinates = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', updateCoordinates);

    function loop() {
      updatePosition();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
    };
  }, []);

  return (
    <Router>
      <div className="App">
    
        <div id="cursor">
          <div className="cursor--inner"></div>
        </div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/NHeroSection" element={<NHeroSection />} />
          <Route path="/space" element={<CommunityApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/c2" element={<CommunityApp2 />} />

        </Routes>
      </div>
      {/* <Footer />
      <Footer1 /> */}
   


    </Router>
  );
}

export default App;
