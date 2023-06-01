import React from 'react';
import '../Auth/CSS/Signup.css';
import { Link } from 'react-router-dom';


const Login = () => {
    return(
      
    <div className="signup">
          <form>
            <label >Sign Up</label> <br />
              <input type="text" name="reg_no" placeholder='Reg No. eg. imt/unn/b.sc/com/2019/005' />
             <input type="text" placeholder='Enter your first name' />
             <input type="text" name="" placeholder='Enter your last name' />
            <input type="email" name="email" placeholder='name@domain.com' />
            <input type="password" name="password" placeholder='password' />
            <input type="password" name="password" placeholder='Re-enter your password' />
            <button className='button'>Sign up</button>
          </form>

          <div className='log'>
            <p>Already have an Account? <Link style={{textDecoration: "none"}} to="/auth/login">Login in</Link></p>
          </div>
    </div>
    )
   
}

export default Login;