import React from 'react';
import './CSS/Position.css';


const PositioningItem = () => {
    return(
        <div className='position'>
            <div className='heading'>
                <h2 className='h22'>Positioning Items and contents</h2>
            </div>
            <div className='container133'>
                <h3 className='h2'style={{padding:"1rem"}}>Justify Content Properties</h3>
                <div className='container23'>
                <div className='flex-items items-1'>Item 1</div>
                <div className='flex-items items-2'>Item 2</div>
                <div className='flex-items items-3'>Item 3</div>
                <div className='flex-items items-4'>Item 4</div>
                <div className='flex-items items-5'>Item 5</div> 
                </div>

                <article className='article'>
                <h2 className='h3'style={{textAlign: "center"}}>Justify Content have Six properties</h2>
                <p>Justify content align items and distributes any extra spacing in the *Parent Container*.
                    <strong>The align items is always along the main axis.</strong>
                </p>
                <ul>
                    <li>1. <b>Justify-content: flex-start</b></li>
                    <li>2. <b>Justify-content: flex-end</b></li>
                    <li>3. <b>Justify-content: center</b></li>
                    <li>4. <b>Justify-content: space-between</b></li>
                    <li>5. <b>Justify-content: space-around</b></li>
                    <li>6. <b>Justify-content: space-evenly</b></li>
                </ul>
            </article>
            </div>

            <div className='container134'>
                <h2 className='h2'style={{padding:"1rem"}}>Align Items Properties</h2>
                <div className='container23'>
                <div className='flex-items items-1'>Item 1</div>
                <div className='flex-items items-2'>Item 2</div>
                <div className='flex-items items-3'>Item 3</div>
                <div className='flex-items items-4'>Item 4</div>
                <div className='flex-items items-5'>Item 5</div> 
                </div>

                <article className='article'>
                <h3 className='h3'>Align Items have Five properties</h3>
                <p>Align Items align items along the cross axis.
                </p>
                <ul>
                    <li>1. <b>Align-items: flex-start</b></li>
                    <li>2. <b>Align-items flex-end</b></li>
                    <li>3. <b>Align-items center</b></li>
                    <li>4. <b>Align-items stretch</b></li>
                    <li>5. <b>Align-items baseline</b></li>
                </ul>
            </article>
            </div>

            <div className='container135'>
                <h2 className='h2'style={{padding:"1rem"}}>Align Content Properties</h2>
                <div className='container23'>
                <div className='flex-items items-1'>Item 1</div>
                <div className='flex-items items-2'>Item 2</div>
                <div className='flex-items items-3'>Item 3</div>
                <div className='flex-items items-4'>Item 4</div>
                <div className='flex-items items-5'>Item 5</div> 
                <div className='flex-items items-1'>Item 7</div>
                <div className='flex-items items-2'>Item 8</div>
                <div className='flex-items items-3'>Item 9</div>
                </div>

                <article className='article'>
                <h3 className='h3'>Align Content have 7 possible values</h3>
                <p>Is used to align lines of content along the cross axis and distribute any extra spacing in the parent container
                </p>
                <ul>
                    <li>1. <b>Align-Content: flex-start</b></li>
                    <li>2. <b>Align-Content: flex-end</b></li>
                    <li>3. <b>Align-Content: center</b></li>
                    <li>4. <b>Align-Content: stretch</b></li>
                    <li>5. <b>Align-Content: space-between</b></li>
                    <li>6. <b>Align-Content: space-around</b></li>
                    <li>7. <b>Align-Content: space-evenly</b></li>
                </ul>
            </article>
            </div>
        </div>
    )
}
export default PositioningItem;