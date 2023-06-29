import React from 'react';
import '../Dashboard/Components/css/Index.css';
import Sidebar from './Components/SideBarSection/Sidebar';
import Body from './Components/BodySection/Body';

const Index = () => {
    return(
        <div className='main__content'>
            <div className='container1'>
               <Sidebar />
               <Body />
            </div>

            
        </div>
        
        
       
    )
}

export default Index;