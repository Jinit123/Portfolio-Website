import React from 'react'
import './Hero.css'
import profile_img from '../../assets/PCopy.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myResume from '../../assets/Jinit-Mewada-Resume.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span> I'm Jinit Mewada,</span> <br />MERN stack developer from India.</h1>
            <p className='hero-para'>I am a MERN Stack Developer, passionate about building fast scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in crafting seamless backend systems that integrate effortlessly with dynamic frontend experiences, ensuring optimal performance and a smooth user journey.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={myResume} download>My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
