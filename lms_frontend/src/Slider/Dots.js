import React from 'react';

const Dots = ({ activeIndex, onClick, imageSlider }) => {
    return(
    <div className='dots'>
        {imageSlider.map((slide, index) =>(
            <span key={index} className={`${activeindex === index ? "dot dot-active" : "dot"}`}
            onClick={() => onclick(index)}>
            </span>
        ))}
    </div>
    )
    
}
export default Dots;