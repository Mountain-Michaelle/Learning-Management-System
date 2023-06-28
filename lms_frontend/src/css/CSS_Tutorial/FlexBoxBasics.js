import React from 'react';
import ImageDesc from '../../static/images/ImageDesc.png';
import { Link } from 'react-router-dom';
import KeyboardDouble from '@mui/icons-material/KeyboardDoubleArrowRight';


const FlexBoxBasic = () => {
    return(
             <div className="styles">
                <h1 className='first-heading'> Flex Box Tutorial</h1>
            <article className='articles'>Flex-box is one dimensional layout model used to distribute space between items, 
                create flexible and efficient layouts and control their alignment
            </article>
            <h3>Layout modes</h3>
                <ul>
                    <li>Block, for section in a webpage</li>
                    <li>Inline, for text</li>
                    <li>Table, for two dimensional table data </li>
                    <li>Position, for explicit position of an element</li>
                </ul>
            <h3>Flexibilities With Flexbox</h3>
            <ul>
                <li>Arrange items</li>
                <li>Spacing</li>
                <li>Alignment of Items</li>
                <li>Order of items</li>
                <li>bootstrap 4 is built on top the flex layout</li> 
            </ul>

            <h3>Terminologies Used in Flex Box</h3>
            <ul>
                <li>Flex Container</li>
                <li>Flex items</li>
                <h4>Flex Axes</h4>
                <li>Main axis</li>
                <li>Flex axis</li>
            </ul>
            <p>Starting point of Flex Axes is "Main Start" and "Main End" <i>The differen between the Main
                Start and the Main End is called  the MAIN SIZE, <strong>The Same thing is applied to the Cross Axis</strong></i>
            </p>
            <img className="descriptive-image" src={ImageDesc} alt="Descriptive image" />
            <h3> Flex Container Properties, that can be applied to a Container</h3>
            <ul>
                <li>Display properties</li>
                <li>Flex-direction</li>
                <li>Flex-Wrap</li>
                <li>Flex-flow : short hand for flex-direction and flex-wrap</li>
                <li>justify-content <strong>This aligns content items along the main axis</strong></li>
                <li>align-items <strong>This defined how the flex items are layed out along the cross axis</strong></li>
                <li>align-contents : <strong>This aligns items along the cross axis instead of the main axis</strong></li>
                <li>align-content<strong>This is similar to justify-content with the difference being that it will align item along the cross axis instead of the main axis</strong></li>
            </ul>

            <Link to="application" > <h2 style={{textAlign: 'center', 
                                    padding: '1rem',
                                    color: 'aqua',
                                    width: '100%'}}><KeyboardDouble className='arrow' /> 
                                        Closer Look</h2></Link>
        </div>
    )
}
export default FlexBoxBasic;