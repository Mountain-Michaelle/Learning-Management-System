import React from 'react';
import '../Auth/CSS/Signup.css';
import '../Auth/CSS/Auth.css';
import '../Auth/CSS/Login.css';

const Login = () => {
    return(
        <div className='auth'>
        <div className='login__container'>
            <form>
            <label>Login</label>
            <input type="email" placeholder='email' />
            <input type="password" placeholder="password" />
                <p>
                    <input className="checkBox" type="checkbox" name="remember" value="Remember me" />Remember me
                </p>
            <button className='login__button'>login</button>
            </form>
            <div className='log'>
                <p>Some text here</p>
            </div>
        </div> 
        </div>
        
    )
}

export default Login;