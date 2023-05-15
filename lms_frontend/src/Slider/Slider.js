import React, {useEffect, useState} from 'react';
import SliderContent from './SliderContent';
import ImageSlider from './ImageSlider';
import Dots from './Dots';
import Arrow from './Arrow';
import '../css/Slider.css';


const Slider = ({}) => {

    const len = ImageSlider.length - 1;

    const [activeIndex, setActiveindex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveindex(activeIndex === len ? 0 : activeIndex + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, [activeIndex])
    return(
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageSlider={ImageSlider} />
            <Arrow 
                prevSlide = {() => setActiveindex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide = {() => setActiveindex(activeIndex === len ? 0 : activeIndex +  1)
                    } />
            <Dots activeIndex={activeIndex} imageSlider={ImageSlider} onClick={(activeIndex) => setActiveindex(activeIndex)} />
        </div>
    )
}
export default Slider;