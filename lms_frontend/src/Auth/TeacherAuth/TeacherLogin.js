import React from 'react';
import './css/TeacherLogin.css';
import { Link } from 'react-router-dom';


const TeacherLogin = () => {
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
                        <input className='input' type='email' placeholder='@mail.com' />
                        <label className='label'>Password</label>
                        <input className='input' type="password" placeholder="*******" />
                        <button className='bttn'>Submit</button>
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