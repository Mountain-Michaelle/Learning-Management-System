import React from 'react';
import './CSS/FlexBoxDisplay.css';
import FlexWrap from './FlexWrap';
import KeyboardDouble from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
const FlexBoxDisplay = () => {
    return(
        <div className='container11'>
          <div className=' flexBox__display'>
            <h2 className='h2'>Application of flex Display</h2>
          </div>  

            <div className='container12'>
                <div className='flex-item item-1'>Item 1</div>
                <div className='flex-item item-2'>Item 2</div>
                <div className='flex-item item-3'>Item 3</div>
                <div className='flex-item item-4'>Item 4</div>
                <div className='flex-item item-5'>Item 5</div>
                <div className='flex-item item-6'>Item 6</div>
                <div className='flex-item item-7'>Item 7</div>
                <div className='flex-item item-8'>Item 8</div> 
            </div>
            <div className='desc'>
                <h2 className='h2'>Display Property</h2>
                <hr />
                <h3 className='h5'>Display property is used to create a block level or inline level flex container </h3>
                <ul>
                    <li>1. <b> Flex </b> </li>
                    <li>2. <b> Inline-Flex </b>(mostly wrap the border close to the items)</li>
                </ul>

               
            </div>
            <h2 className='h2'>Flex Direction</h2>
            <div className='flex__direction'>
                <div className='container23'>
                <div className='flex-items items-1'>Item 1</div>
                <div className='flex-items items-2'>Item 2</div>
                <div className='flex-items items-3'>Item 3</div>
                <div className='flex-items items-4'>Item 4</div>
                <div className='flex-items items-5'>Item 5</div>
                <div className='flex-items items-6'>Item 6</div>
                <div className='flex-items items-7'>Item 7</div>
                <div className='flex-items items-8'>Item 8</div> 
                </div>
            </div>

            <article className='article'>
                <h2 className='h2'>Flex Direction have four properties</h2>
                <ul>
                    <li>1. <b>flex-direction: column (property)</b></li>
                    <li>2. <b>flex-direction: column-reverse (property)</b></li>
                    <li>3. <b>flex-direction: row (property)</b></li>
                    <li>4. <b>flex-direction: row-reverse (property)</b></li>
                </ul>
            </article>

            <FlexWrap />

            <Link to="positioning" > <h2 style={{textAlign: 'center', 
                                    padding: '1rem',
                                    color: 'orange',
                                    width: '100%'}}><KeyboardDouble className='arrow' style={{color: 'orange'}} /> 
                                        Closer Look</h2></Link>
        </div>
        
        
    )
}
export default FlexBoxDisplay;