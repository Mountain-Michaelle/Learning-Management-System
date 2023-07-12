import React, {useState } from 'react';
import './css/TeacherRegister.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/teachers/';

const TeacherRegister = () => { 
    const [teacherData, setTeacherData] = useState(
        {
            'full_name': '',
            'email': '',
            'qualification': '',
            'skills': '',
            'nationality': '',
            'password': '',
            'password2': '',
            'status': true
        }
    )
   const handleChange=(event) => {
        setTeacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
   const handleSubmit=(event) =>{
        event.preventDefault()
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("skills", teacherData.skills)
        teacherFormData.append("nationality", teacherData.nationality)
        teacherFormData.append("password", teacherData.password)
        teacherFormData.append("password2", teacherData.password2)
     
        axios.post(baseUrl, teacherFormData)
        .then((response) => {
                setTeacherData({
                    'full_name': '',
                    'email': '',
                    'qualification': '',
                    'skills': '',
                    'nationality': '',
                    'password': '',
                    'password2': '',
                    'status': 'success'
                })
                console.log(response.data)
            })
        .catch(error => {
            setTeacherData({
                'status': 'error',
            }) 
        })
        }
    return(
        <div className='teacher__register'>
            <div className='register__card'>
                <h2 className='h2'> Register a Teacher Account</h2>
                {
                    teacherData.status==='success' && 
                    <h4 style={{color: 'green', fontSize:'1.5rem', textAlign:'center'}}>You have successfully registered</h4>
                    }
                {
                    teacherData.status==='error' &&<h5 style={{color: 'red', fontSize:'1.2rem', h4Hover: 'white', textAlign: 'center' }}> erro! <br /> check your datas or your selections well!</h5>

                }
                <form className='form'>
                    <label className='label'>Full name</label>
                    <input onChange={handleChange} className='input' value={teacherData.full_name} name='full_name' type="text" placeholder='full name' />
                    <label className='label'>email</label>
                    <input onChange={handleChange} className='input' value={teacherData.email} name='email' type="email" placeholder='name@mail.com' />
                    <label className='label'>Nationality</label>
                    <select onChange={handleChange} value={teacherData.nationality} className='select' name="nationality" id="car">
                        <option className='option'>Nigeria</option>
                        <option className='option'>Ghana</option>
                        <option className='option'>Biafra</option>
                    </select>
                    <label className='label'>Qualification</label>
                    <input onChange={handleChange} className='input' value={teacherData.qualification} name='qualification' type="text" placeholder='B.sc, HND, ND PHD..' />

                    <label className='label'>skills</label>
                    <select onChange={handleChange} value={teacherData.skills} className='select'  name="skills" id="car">
                        <option className='option' >Python</option>
                        <option className='option'>History</option>
                    </select>
                    <label className='label'>Create a login password</label>
                    <input onChange={handleChange} className='input' value={teacherData.password} type="password" name="password" placeholder='*********' />
                    <label className='label'>Confirm Password</label>
                    <input onChange={handleChange} className='input' value={teacherData.password2} type="password" name="password2" placeholder='*********' />
                    <button className='bttn' onClick={handleSubmit}>SUMBIT</button>  
                </form>
                <div className='register'>
                        <h4 className='h4'>Already a registered staff? <Link to='/teacherauth' >Log-in here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export default TeacherRegister;