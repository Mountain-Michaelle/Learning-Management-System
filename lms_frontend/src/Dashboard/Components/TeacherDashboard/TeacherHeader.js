import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const teacherName = localStorage.getItem('teacherName')
const teacherCourse = localStorage.getItem('teacherCourse')

const TeacherHeader = () => {
    return(
        <div className='teacher__header'>
            <div className='header__icon'>
               <div className='text'><span><i style={{fontSize: '.8rem', color:'yellow'}}>Welcome @ </i>{teacherName}</span><code>{teacherCourse}</code></div>         
               <div className='imagery'>
                    <div className='icon notify'><NotificationsIcon /></div>
                  <Link to="/course-list"><div className='icon time'><AccessTimeIcon /></div></Link>  
                   <Link to="/add-course"><div className='icon cloud'><CloudUploadIcon /></div></Link> 
                    <div className='icon'><AccountCircleIcon /></div>
                    <div className='image'><img src='' alt="" /></div>
               </div>
            </div>
        </div>
    )
}

export default TeacherHeader;