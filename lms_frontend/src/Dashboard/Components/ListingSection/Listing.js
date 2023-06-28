import React from 'react';
import '../css/Listing.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import school from '../images/CourseBook.png';
import school1 from '../images/BooksPen.png';
import school2 from '../images/Upper.png';
import school3 from '../images/pngwing.com (1).png';
import user1 from '../images/no_img.jpg';
const Listing = () => {
    return(
        <div className="listing__section">
            <div className='heading flex'>
                <h1 className='h1'>My Listing</h1>
                <button className='btn flex'>
                    See All <ArrowRightAltIcon className='icon' />
                </button>
            </div>

            <div className='section__container flex'>
                <div className='single__item'>
                    <FavoriteIcon className='icon' />
                    <img className='img' src={school} alt="images" />
                    <h3 className='h3'>Annual Vinci</h3>
                </div>

                <div className='single__item'>
                    <FavoriteIcon className='icon' />
                    <img className='img' src={school1} alt="images" />
                    <h3 className='h3'>CSS Styling</h3>
                </div>

                 <div className='single__item'>
                    <FavoriteIcon className='icon' />
                    <img className='img' src={school2} alt="images" />
                    <h3 className='h3'>Computer Sience</h3>
                </div>

                 <div className='single__item'>
                    <FavoriteIcon className='icon' />
                    <img className='img' src={school3} alt="images" />
                    <h3 className='h3'>Religious Studies</h3>
                </div> 
                
            </div>

            <div className='sellers flex'>
             <div className='topStudent__section'>
                <div className='heading flex'>
                    <h3 className='h3'>Top Year Students</h3>
                    <button className='btn flex'>
                        <ArrowRightAltIcon className='icon' />
                    </button>
                 </div>
                 <div className='card flex'>
                    <div className='users'>
                        <img className='img' src={user1} alt="User image" />
                         <img className='img' src={user1} alt="User image" />
                          <img className='img' src={user1} alt="User image" />
                    </div>
                    <div className='card__text'>
                        <span className='span'>
                            14.556 Courses Uploaded <br />
                        <small className='small'>
                            21 Students Enrolled <span className='date'> 7 Days</span>
                        </small>
                        </span>
                        
                    </div>
                 </div>
             </div>
             {/* This The Second flex */}
             <div className='topStudent__section'>
                <div className='heading flex'>
                    <h3 className='h3'>Top Rated Teachers </h3>
                    <button className='btn flex'>
                        <ArrowRightAltIcon className='icon' />
                    </button>
                 </div>
                 <div className='card flex'>
                    <div className='users'>
                        <img className='img' src={user1} alt="User image" />
                         <img className='img' src={user1} alt="User image" />
                          <img className='img' src={user1} alt="User image" />
                    </div>
                    <div className='card__text'>
                        <span className='span'>
                            14.556 Courses Uploaded <br />
                        <small className='small'>
                            21 Students Enrolled <span className='date'> 7 Days</span>
                        </small>
                        </span>
                        
                    </div>
                 </div>
             </div>
            </div>
            
        </div>
    )
}

export default Listing;