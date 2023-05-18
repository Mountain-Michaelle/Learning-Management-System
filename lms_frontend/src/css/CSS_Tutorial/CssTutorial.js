import React from 'react';
import '../CSS_Tutorial/CSS/CssTutorial.css';
import FlexBoxBasic from './FlexBoxBasics';
import FlexBoxDisplay from './FlexBoxDisplay';


const CssTutorial = () => {
    return(
       <div className='flex-box'>
        <FlexBoxBasic />
        <FlexBoxDisplay />
       </div>
    )
}

export default CssTutorial;