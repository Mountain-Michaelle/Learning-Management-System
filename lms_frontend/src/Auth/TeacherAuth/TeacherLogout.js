import React from 'react';
import './css/TeacherLogout.css';

const TeacherLogout = () => {
    localStorage.removeItem('teacherLoginStatus')
    window.location.href='/';
    return(
        <div className='logout'>
            <div className='heading'>
                <h2>IMTech</h2>
            </div>
            <div className='logout__card'>
                <h1 className='h1'>Good Bye!</h1>
                <h2 className='h2'>Logging out...</h2>
            </div>
        </div>
    )
}

export default TeacherLogout;