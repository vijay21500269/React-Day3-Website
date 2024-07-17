import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Courses from './Pages/Courses';
import Events from './Pages/Events';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;