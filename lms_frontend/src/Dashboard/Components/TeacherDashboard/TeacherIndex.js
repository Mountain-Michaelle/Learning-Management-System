import React from 'react';
import '../css/Index.css';
import Sidebar from '../SideBarSection/Sidebar';
import '../css/Sidebar.css';
import '../css/TeacherIndex.css';
import TeacherDash from '../TeacherDashboard/TeacherDash';
import SidebarTeacher from '../SideBarSection/SidebarTeacher';

const TeacherIndex = () => {
    return(
        <div className='main__content2'>
            <TeacherDash />  
        </div>
    )
}

export default TeacherIndex;