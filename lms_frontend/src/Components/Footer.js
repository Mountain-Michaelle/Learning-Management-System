import React from 'react';
import '../css/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer__contents'>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Travels</li>
                </ul> 
                <ul>
                    <li>Trading Skills</li>
                    <li>Get a platform</li>
                    <li>Make money online</li>
                </ul>
                <ul>
                    <li>YourInstructor</li>
                    <li>Your Teacher</li>
                    <li>Your attendance</li>
                </ul>
            </div>
            <div className="footer__description">
                    <h2>IMTech Online</h2>
                    <p>
                        IMTech Online is an online class design for students of IMT specially to easeand reduce stress
                        for students who are not up to making it physically in school classes
                        
                    </p>
            </div>
            <div className='footer__social'>
                <ul>
                    <li><TwitterIcon /></li>
                    <li><FacebookSharpIcon /></li>
                    <li><LinkedInIcon /></li>
                    <li><GoogleIcon /></li>
                    <li><YouTubeIcon /></li>
                </ul>
            </div>
            <div className='footer__bottom'>
                <p> copyright &copy;2023, Design by All Star{'(MT.M)'}</p>
            </div>
        </div>
    )
}
export default Footer;