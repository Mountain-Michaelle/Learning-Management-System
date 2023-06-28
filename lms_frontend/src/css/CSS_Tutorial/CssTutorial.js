import React, {useEffect} from 'react';
import '../CSS_Tutorial/CSS/CssTutorial.css';
import FlexBoxBasic from './FlexBoxBasics';
import FlexBoxDisplay from './FlexBoxDisplay';


const CssTutorial = () => {

    useEffect(() => {
        document.title = "css tutorial"
    }, [])
    return(
       <div className='flex-box'>
        <FlexBoxBasic />
       </div>
    )
}

export default CssTutorial;