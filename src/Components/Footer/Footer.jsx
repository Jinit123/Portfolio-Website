import React, { use } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Jinit Mewada</h1>
                    <img src={theme_pattern} alt="" />
                    {/* <p>I am a MERN Stack Developer, passionate about building fast scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in crafting seamless backend systems that integrate effortlessly with dynamic frontend experiences, ensuring optimal performance and a smooth user journey.</p> */}
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr className='hr'/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Jinit Mewada. All Rights Reserved</p>
                <div className="footer-bottom-right">
                    {/* <p>Connect with me</p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
