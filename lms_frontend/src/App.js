import Home from './Components/Home';
import Navbar1 from './Components/Navbar1';
import {Routes, Route} from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';
import CourseDetail from './Components/CourseDetail';
import Slider from './Slider/Slider';
import CssTutorial from './css/CSS_Tutorial/CssTutorial';
import CourseDetailVideo from './Components/CourseDetailVideo';
import Auth from './Auth/Auth';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import React from 'react';
import Index from './Dashboard/Index';

function App() {
  return (
    <div className="app">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-tutorial" element={<CssTutorial />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/detail/:course_id/video" element={<CourseDetailVideo />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
