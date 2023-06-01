import React from 'react';
import SignUp from '../Auth/SignUp';
import Login from '../Auth/Login';
import '../Auth/CSS/Auth.css';


const Auth = () => {
    return(
        <div className="nt-4 auth">
            <div className='auth__container'>
                <SignUp />
            </div>
        </div>
    )
}

export default Auth;