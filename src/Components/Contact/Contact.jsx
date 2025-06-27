import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "66c14a5d-d62b-4172-83ea-d510d2ba7fbf");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Email Sent Successfully");
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am a MERN Stack Developer, passionate about building fast scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in crafting seamless backend systems that integrate effortlessly with dynamic frontend experiences, ensuring optimal performance and a smooth user journey.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>jinitmewada41@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91 9574559375</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Ahmedabad, India</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Your Messages</label>
                    <textarea name="message" rows="8" placeholder='Enter your message....'></textarea>
                    <button className='contact-submit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
