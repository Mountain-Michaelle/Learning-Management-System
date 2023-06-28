import React from 'react'; 
import '../css/Top.css';
import SearchIcon from '@mui/icons-material/Search';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import img from '../images/agonizing jesus.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Video from '../images/video/InShot_20230602_022825183.mp4';
import DoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StudentImg from '../images/Upper.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const Top = () => {
    return(
        <div className='top__section'>
            <div className='header__section flex'>
                <div className='title'>
                    <h1 className='h1'>IMTech online </h1>
                    <p className='p'>Welcome back Michael!</p>
                </div>
                <div className='search__bar flex'>
                    <input className="input" type=  "text" placeholder="search IMTech" />
                    <SearchIcon className="icon" />
                </div>
                
                <div className='admin__div'>
                     <ContactSupportIcon  className='icon'/>
                     <NotificationsNoneIcon className='icon' />
                      <div className='admin__img'>
                    <div className='img'>
                    <img src={img} alt="User" />
                    </div>
                    
                     </div> 
                </div>
              
            </div>

        <div className='card__section flex'>
        <div className='right__card flex'>
                <h1 className='h1'>Develope a bright and a skillful future</h1>
                <p className='p'>IMTech is the Institute fast growing online platform that enables students...</p>
                
                <div className="buttons flex">
                    <button className='btn transparent'>Enter class</button>
                    <button className='btn '>Top Courses</button>
                </div>

                <div className='video__div'>
                    <video className='video' src={Video} autoPlay loop muted></video>
                </div>
            </div> 
            <div className='left__card flex'>
            <div className='main flex'>
                
                <div className='text__div'>
                    <h1 className='h1'>My Stat</h1>
                    <div className='flex'>
                        <span className='span'>
                            Today < br /><small className='small flex'><i className="i">2</i> Lectures</small>
                        </span>
                        <span className='span'>
                            Monthly <br /> <small className='small flex'><i className="i">44</i> Classes</small>
                        </span>
                    </div>
                    <span className='flex link'>
                        Go to my class
                        <DoubleArrowRightIcon  className="icon" />
                    </span>
                </div>
                
                <div className='img__div'>
                    <img src={StudentImg} alt="image here"  />
                </div>
            </div>
            {/* is card will be used later */}
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
        </div>

       
        </div>
    )
}
export default Top;