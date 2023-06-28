import React from 'react';
import Sidebar from '../SideBarSection/Sidebar';
import '../css/settings.css';
import profile from '../images/agonizing jesus.png';
import EditIcon from '@mui/icons-material/Edit';

const Settings = () => {
    return(
        <div className='settings'>
            

            <div className='setting__container'>
                <Sidebar className='sidebar'/>
            <div className='setting__div'>
                <h1 className='h1'>Settings</h1>
                <div className='break'>
                </div>

                <div className='profile'>
                <ul className='list'>
                <div className='image'><img src={profile} alt="img" className='img' /></div>
                <li className='span'>First Name <strong>Michael</strong><EditIcon className='icon'/></li>
                <li className='span'>Middle Name <strong>Chinemelu</strong><EditIcon className='icon'/></li>
                <li className='span'>Surname <strong>Ugwu</strong><EditIcon className='icon'/></li>
                <li className='span bg'>Reg. No. <strong>imt/unn/b.sc/com/2019/005</strong></li>
                <li className='span bg'>Course of study<strong>Computer Science</strong></li>    
                </ul>  
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Settings;