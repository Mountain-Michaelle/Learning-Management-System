import { TableCell } from '@mui/material';
import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const TeacherBody = () => {
    return(
        <div className='teacher__body'>
            <h1 className='subhead2'>Dashboard Statistics </h1>
            <div className='table'>
                <table className='tabes'>
                    <thead>
                        <th> Your Course</th>
                        <th>Students</th>
                        <th>Progress</th>
                        <th>Attendances</th>
                    </thead>
                    <tbody>
                            <td>Cos404</td>
                            <td>< AccountCircleIcon className='userIcon' /> Michael</td>
                            <td>90%</td>
                            <td>80%</td>
                    </tbody>
                    <tbody>
                            <td>Cos404</td>
                            <td> <AccountCircleIcon className='userIcon'/> Michael</td>
                            <td>90%</td>
                            <td>80%</td>
                    </tbody>
                </table>
            </div>

            <div className='recent'>
                <h2 className='subhead2'>Recently Added</h2>
                <div className='recent__items'>
                    <div className='items'>
                    <div className='i course'>Course 221</div>
                    <div className='i date'>23rd July</div>
                    <div className='i duration'>3hrs duration</div>
                    <div className='i viewed'><RemoveRedEyeIcon /> 11<code>views</code></div> 
                    </div>
                </div>

                <div className='recent__items'>
                    <div className='i items'>
                    <div className='i course'>Course 221</div>
                    <div className='i date'>23rd July</div>
                    <div className='i duration'>3hrs duration</div>
                    <div className='i viewed'><RemoveRedEyeIcon /> 41<code>views</code></div> 
                    </div>
                </div>
            </div>

                <Link to="/add-course" className='upload'>
                    <button className='butt1'><CloudUploadIcon className='icon1'/>Upload</button>
                </Link>
        
        </div>
    )
}

export default TeacherBody;