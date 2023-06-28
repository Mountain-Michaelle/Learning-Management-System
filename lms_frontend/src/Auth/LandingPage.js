import React from 'react';
import Icon from '../Dashboard/Components/images/IMtech.png';
import course1 from '../Dashboard/Components/images/school.png'
import './CSS/LandingPage.css';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return(
        <div className='landing__page'>
            <div className='heading'>
                <h2 className='h2'>Welcome to IMTech Online</h2>
                <img src={Icon} className='img' />
                <div className='line1'>
                <div className='line'></div>
                <h4 className='h4'>Your Dream is here</h4>
                <div className='line'></div>
                </div>                
            </div>
            <div className='buttons'>
               <Link to='/auth/login'><button className='bttn'>Enroll As Student</button></Link> 
                <Link to='/teacherauth'> <button className='bttn'>Enroll As Teacher</button></Link>
            </div>
        <div className='courses'>
            <h2 className='h2'>Hurray! IMTech offfers a tuns of enrolled online courses</h2>
            <h3 className='h3'>HOt Courses</h3>
           <div className='card__container'>
                <div className='landing__cards'>
                    <img src={course1} className='img' />
                    <p className='ptag'>Computer Science</p>
                </div>
                <div className='landing__cards'>
                    <img src={course1} className='img' />
                    <p className='ptag'>Computer Science</p>
                </div>
                <div className='landing__cards'>
                    <img src={course1} className='img' />
                    <p className='ptag'>Computer Science</p>
                </div>
                <div className='landing__cards'>
                    <img src={course1} className='img' />
                    <p className='ptag'>Computer Science</p>
                </div>
            </div> 
        </div>
            
        </div>
    )
}

export default LandingPage;