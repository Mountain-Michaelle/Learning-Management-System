import React from 'react';
import '../css/Sidebar.css';

// Material UI Icons
import myIcon from '../images/IMtech.png';
import SpeedIcon from '@mui/icons-material/Speed';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SchoolIcon from '@mui/icons-material/School';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ContactsIcon from '@mui/icons-material/Contacts';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

//React Routers
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className='sidebar grid'>
            <div className='logo__div flex'>
                <img  className="img" src={myIcon} alt="image name" />
            </div>

            <div className='menu__div'>
                <h3 className='div__title'>
                    Quick Menu
                </h3>
                <ul className="menu__list grid">
                    <li className='list__item'>
                        <a href="#" className='menu__link flex'>
                           <Link to='/'><SpeedIcon className="icon" />
                           <span className="small__text">Dashboard</span></Link> 
                        </a>
                    </li>
                    <li className='list__item'>
                        <a href="#" className='menu__link flex'>
                           <Link to='/courses'> <SchoolIcon className="icon" />
                            <span className="small__text">My Course</span></Link>
                        </a>
                    </li>
                    <li className='list__item'>
                        <a href="#" className='menu__link flex'>
                            <AccessibilityNewIcon className="icon" />
                            <span className="small__text">Attendances</span>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="menu__link flex">
                            <EmojiEventsIcon className='icon' />
                            <span className='small__text'>Scolarships</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='setting__div'>
                <h3 className='div__title'>
                    SETTINGS
                </h3>
                <ul className="menu__list grid">
                    <li className='list__item'>
                        <a href="#" className='menu__link flex'>
                            <BarChartIcon className="icon" />
                            <span className="small__text">Chart</span>
                        </a>
                    </li>
                    <li className='list__item'>
                        <a href="#" className='menu__link flex'>
                            <RssFeedIcon className="icon" />
                            <span className="small__text">Sch. Blog</span>
                        </a>
                    </li>
                    <li className='list__item'>
                        <a href="#" className='menu__link flex'>
                            <ContactsIcon className="icon" />
                            <span className="small__text">Contact Us</span>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="menu__link flex">
                            <WbIncandescentIcon className='icon' />
                            <span className='small__text'>About Us</span>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="menu__link flex">
                           <Link to='/settings'><SettingsIcon className='icon' />
                            <span className='small__text'>Settings</span></Link> 
                        </a>
                    </li>
                </ul>
            </div>

            <div className='sidebar__card'>
                <HelpOutlineIcon className="icon"/>
                <div className='card__content'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <h3 className='h3'>Help Center</h3>
                    <p className='p'>Have trouble with IMTech, contact us for more information</p> 
                    <button className='button'>Go to help center</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;