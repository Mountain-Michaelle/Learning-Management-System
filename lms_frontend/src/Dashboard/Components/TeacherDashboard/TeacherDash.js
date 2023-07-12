import React from 'react';
import '../css/TeacherDash.css';
import '../css/TeacherIndex.css';
import TeacherHeader from '../TeacherDashboard/TeacherHeader';
import TeacherBody from '../TeacherDashboard/TeacherBody';
const TeacherDash = () => {
    return(
        <div className='teacher__dashboard'>
             <TeacherHeader />
             <div className='teacherz'>
              <TeacherBody />  
             </div> 
        </div>
    )
    
}

export default TeacherDash;