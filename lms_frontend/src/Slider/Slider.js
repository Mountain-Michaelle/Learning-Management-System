import React from 'react';
import SliderContent from './SliderContent';
import ImageSlider from './ImageSlider';
import Dots from './Dots';


const Slider = ({}) => {

    const len = ImageSlider.length - 1;

    const [activeIndex, setActiveindex] = useState(0)
    return(
        <div>
            <SliderContent activeIndex={activeIndex} imageSlider={ImageSlider} />
            <Arrow 
                prevSlide = {() => setActiveindex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide = {() => setActiveindex(activeIndex === len ? 0 : activeIndex +  1)
                    } />
            <Dots activeIndex={activeIndex} imageSlider={ImageSlider} onClick={activeIndex => setActiveindex(activeIndex)} />
        </div>
    )
}
export default Slider;