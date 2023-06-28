import React from 'react';
import '../css/Activity.css';
// Imported Material UIs
import EastIcon from '@mui/icons-material/East';

// Imported Images
import customer1 from '../images/allstarz..jpg';

const Activity = () => {
    return(
       <div className="activity__section">
        <div className="heading flex">
            <h1 className='h1'>Recent activities</h1>
            <button className='btn flex'>See All <EastIcon className='icon' /></button>
        </div>
        <div className='sec__container grid'>
            <div className='single__customer flex'>
                <img className="img" src={customer1} alt="customer"  />
                <div className='customer__details'>
                    <span className='name'>Mountain Michael</span>
                    <small className='small'>Class Rep.</small>
                </div>
                <div className='duration'>
                    <h3 className='h3'>2ms Ago</h3>
                </div>

            </div>
            <div className='single__customer flex'>
                <img className="img" src={customer1} alt="customer"  />
                <div className='customer__details'>
                    <span className='name'>Mountain Michael</span>
                    <small className='small'>Class Rep.</small>
                </div>
                <div className='duration'>
                    <h3 className='h3'>2ms Ago</h3>
                </div>

            </div>

            <div className='single__customer flex'>
                <img className="img" src={customer1} alt="customer"  />
                <div className='customer__details'>
                    <span className='name'>Mountain Michael</span>
                    <small className='small'>Class Rep.</small>
                </div>
                <div className='duration'>
                    <h3 className='h3'>2ms Ago</h3>
                </div>

            </div>
        </div>
        </div> 
    )
    
}

export default Activity;