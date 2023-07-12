import React from 'react';
import './CSS/FlexItem.css';


const FlexItem = () => {
    return(
        <div className='flex__item'>
            <h2 className='h2'>Flex Item Properties</h2>

            <div className='article'>
                <h3>
                    Properties associated with flex items are 
                </h3>
                    <ul className='ul'>
                        <li><i>1 </i> Order</li>
                        <li><i>2 </i> flex-grow</li>
                        <li><i>3 </i> flex-shrink</li>
                        <li><i>4 </i> flex-basis</li>
                        <li><i>5 </i> flex</li>
                        <li><i>1 </i> align-self</li>
                    </ul>
            </div>

            <div className='order'>
                <h3 className='h3'><span>1. </span>Order</h3>
                <div className='cont'>

                <div className='containers1'>
                <div className='flex__items item1'>Item 1</div>
                <div className='flex__items item2'>Item 2</div>
                <div className='flex__items item3'>Item 3</div>
                <div className='flex__items item4'>Item 4</div>
                <div className='flex__items item5'>Item 5</div>
                <div className='flex__items item6'>Item 6</div>
                <div className='flex__items item7'>Item 7</div>
                <div className='flex__items item8'>Item 8</div>   
                </div>
                
                <div className='text'>
                    <p>
                        By default all the items in the order are zeros, and causes any other item assigned to one
                        to appear at the very end of the row or columns <br />
                        <strong>Elements with the same order appear just the same way they appear in the source code</strong>
                    </p>
                   <div className='codes'>
                        <code>
                          flex__items{"{order: 1;}"}
                        </code>
                    </div>
                </div>
            </div>
            </div>

            <div className='flex__grow'>
                <h3 className='h3'><span>2. </span> Flex-Grow</h3>
                <div className='cont'>

                <div className='containers11'>
                <div className='flex__itemss items1'>Item 1</div>
                <div className='flex__itemss items2'>Item 2</div>
                <div className='flex__itemss items3'>Item 3</div>
                <div className='flex__itemss items4'>Item 4</div>
                <div className='flex__itemss items5'>Item 5</div>
                <div className='flex__itemss items6'>Item 6</div>
                <div className='flex__itemss items7'>Item 7</div>
                <div className='flex__itemss items8'>Item 8</div>   
                </div>
                
                <div className='text'>
                <p>
                    Flex Grow property dictates what the available space inside the flex
                    conainer the item should take up.
                    Relative to other items in the container <br />
                    Default value is 0-items do not grow <br />
                    flex-grow value of 1-flex items grow evenly.
                </p>
                </div>
                <h3 className='h3'><span>3. </span> Flex-Shrink</h3>
                <div className='containers01'>
                <div className='flex__items1 items1'>Item 1</div>
                <div className='flex__items1 items2'>Item 2</div>
                <div className='flex__items1 items3'>Item 3</div>
                <div className='flex__items1 items4'>Item 4</div>
                <div className='flex__items1 items5'>Item 5</div>
                <div className='flex__items1 items6'>Item 6</div>
                <div className='flex__items1 items7'>Item 7</div>
                <div className='flex__items1 items8'>Item 8</div>   
                </div>
                <p>
                    Flex-Shrink property enables the flex Items to be static and not shrink on screen different sizes
                    <br />
                    Defuat value of the shrink item is 1; <br />
                    When set to 1, it stops shrinking at screen different sizes;
                    <br />
                    Flex-Shrink Dictates the shrink factor of the flex items when the defualt size of flex items
                    is larger than the flex container <br />
                    Relative to the other items in the container <br />
                    Default value as stated ealier is 1;

                </p>
            </div>
            </div>

        </div>
    )
}

export default FlexItem;