import React, { useState } from 'react';
import './css/TeacherLogin.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/teacher-login/';

const TeacherLogin = () => {
    const navigate = useNavigate()
    const [teacherLoginData, setTeacheerLoginData] = useState({
        'email': '',
        'password': '',
    })

    const handleChange = (event) => {
        setTeacheerLoginData({
            ...teacherLoginData,
            [event.target.name]: event.target.value
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const TeacherFormData = new FormData();
        TeacherFormData.append('email', teacherLoginData.email)
        TeacherFormData.append('password', teacherLoginData.password)
        axios.post(baseURL, TeacherFormData)
        .then(response => {
            console.log(response.data)
            if(response.data.login===true){
                localStorage.setItem('teacherLoginStatus', true)
                navigate('/dashboard')
            }
        })
        .catch(error => {
            console.log(error)
        })
     }
        console.log("events: " , teacherLoginData)
        // When teacher want to login again, it will automatically redirect them to the dashboad
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus==='true'){
        window.location.href="/dashboard"
    }

    return(
        <div className="teacher__login">
            <div className='heading'>
                <h2>Teachers Panel</h2>
            </div>
            
            <div className='login__card'>
                <div className="card__heading">
                    <h1 className='h1'>Teacher login</h1>
                    <form className='form'>
                        <label className='label'>Email</label>
                        <input className='input' name='email' onChange={handleChange} value={teacherLoginData.email} type='email' placeholder='@mail.com' />
                        <label className='label'>Password</label>
                        <input className='input' name='password' onChange={handleChange} value={teacherLoginData.password} type="password" placeholder="*******" />
                        <button className='bttn' onClick={handleSubmit}>Submit</button>
                    </form>
                    <div className='register'>
                        <h4>Don't have an account yet? <Link to='register' >Register here</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin;