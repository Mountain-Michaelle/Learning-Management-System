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
import Body from './Dashboard/Components/BodySection/Body';
import Settings from './Dashboard/Components/SettingPages/Settings';
import FlexBoxDisplay from './css/CSS_Tutorial/FlexBoxDisplay';
import TeacherLogin from './Auth/TeacherAuth/TeacherLogin';
import PositioningItem from './css/CSS_Tutorial/PositioningItem';
import TeacherAuth from './Auth/TeacherAuth/TeacherAuth';
import TeacherRegister from './Auth/TeacherAuth/TeacherRegister';
import TeacherAuth1 from './Auth/TeacherAuth/TeacherAuth1';
import LanderPage from './Auth/LanderPage';
import TeacherLogout from './Auth/TeacherAuth/TeacherLogout';

function App() {
  return (
    <div className="app">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<LanderPage />} />
        <Route path="/courses" element={<Home />} />
        <Route path="/css-tutorial" element={<CssTutorial />} /> 
        <Route path='/css-tutorial/application' element={<FlexBoxDisplay />} />
        <Route path='/css-tutorial/application/positioning' element={<PositioningItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/detail/:course_id/video" element={<CourseDetailVideo />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="dashboard" element={<Index />} />
        <Route path="/dashboard/body" element={<Body />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/teacherauth" element={<TeacherAuth />} />
        <Route path="/teacherauth/register" element={<TeacherAuth1 />} />
        <Route path="/logoutteacher" element={<TeacherLogout />} />
        
      </Routes>
    </div>
  );
}

export default App;
