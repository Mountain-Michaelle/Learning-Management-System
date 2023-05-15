import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

const Arrow = ({prevSlide, nextSlide}) => {
    return(
        <div className="arrows">
            <span className='prev' onClick={prevSlide}><ArrowBack /></span>

            <span className='next' onClick={nextSlide}><ArrowForward /></span>
        </div>
    )
}

export default Arrow;
