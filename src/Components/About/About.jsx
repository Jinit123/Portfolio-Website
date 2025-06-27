import React from 'react'
import '../About/About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/pcopy.png'
import profile_image from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a MERN Stack Developer, passionate about building fast scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in crafting seamless backend systems that integrate effortlessly with dynamic frontend experiences, ensuring optimal performance and a smooth user journey.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: '70%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Express JS</p><hr style={{ width: '60%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p><hr style={{ width: '40%' }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p><hr style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>0+</h1>
                    <p>Experience</p>
                </div>
                <hr className='achivement-hr' />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr className='achivement-hr' />
                <div className="about-achievement">
                    <h1>14+</h1>
                    <p>Skills</p>
                </div>
                <hr className='achivement-hr' />
            </div>
        </div>
    )
}

export default About
