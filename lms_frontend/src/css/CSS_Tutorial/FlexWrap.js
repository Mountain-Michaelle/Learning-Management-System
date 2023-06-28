import React from 'react';
import './CSS/FlexWrap.css';

const FlexWrap = () => {
    return(
        <div className="flex__wrap">
            <h2 className='h2'>Flex Wrap Property</h2>
            <div className='container15'>
                <div className='flex-item item-1'>Item 1</div>
                <div className='flex-item item-2'>Item 2</div>
                <div className='flex-item item-3'>Item 3</div>
                <div className='flex-item item-4'>Item 4</div>
                <div className='flex-item item-5'>Item 5</div>
                <div className='flex-item item-6'>Item 6</div>
                <div className='flex-item item-7'>Item 7</div>
                <div className='flex-item item-8'>Item 8</div> 
            </div>
            <article className='article'>
                <h2 className='h2'>Properties associated with the flex wrap</h2>
                <ul>
                    <li>1. <b>flex-wrap: nowrap</b></li>
                    <li>2. <b>flex-wrap: wrap</b></li>
                    <li>3. <b>flex-wrap: wrap-reverse</b></li>
                </ul>
            </article>

            <h2 className='h2'>Flex Flow Property</h2>
            <div className='container16'>
                <div className='flex-item item-1'>Item 1</div>
                <div className='flex-item item-2'>Item 2</div>
                <div className='flex-item item-3'>Item 3</div>
                <div className='flex-item item-4'>Item 4</div>
                <div className='flex-item item-5'>Item 5</div>
                <div className='flex-item item-6'>Item 6</div>
                <div className='flex-item item-7'>Item 7</div>
                <div className='flex-item item-8'>Item 8</div> 
            </div>
            <article className='article'>
                <h2 className='h2'>Properties associated with the flex-flow</h2>
                <p>Flex Flow is a short hand for flex-direction and the flex-wrap</p>
                <ul>
                    <li>1. <b>flex-flow: nowrap column</b></li>
                    <li>2. <b>flex-flow: wrap column</b></li>
                    <li>3. <b>flex-flow: wrap column-reverse</b></li>
                    <li>4. <b>flex-flow wrap-reverse row</b> .. and so on.</li>
                </ul>
            </article>
        </div>
    )
}

export default FlexWrap;