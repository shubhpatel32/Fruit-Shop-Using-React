import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="heading">
                <h1>Contact</h1>
                <p><Link to="/">Home <span>{">>"}</span></Link> Contact</p>
            </div>

            <section className="contact">
                <div className="icons-container">
                    <div className="icons">
                        <i className="fa-solid fa-phone"></i>
                        <h3>Contact Number</h3>
                        <p>12345678910</p>
                        <p>5566778899</p>
                    </div>

                    <div className="icons">
                        <i className="fa-solid fa-envelope"></i>
                        <h3>Email</h3>
                        <p>fruit.shop@gmail.com</p>
                    </div>

                    <div className="icons">
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>Address</h3>
                        <p>Vijapur, Mehsana, Gujarat - 382870</p>
                    </div>
                </div>

                <div className="row">
                    <form action="">
                        <h3>Get in Touch</h3>

                        <div className="inputbox">
                            <input type="text" placeholder="Enter your name" className="box" />
                            <input type="email" placeholder="Enter your email" className="box" />
                        </div>
                        <div className="inputbox">
                            <input type="contact" placeholder="Enter your number" className="box" />
                            <input type="text" placeholder="Enter your subject" className="box" />
                        </div>
                        <div className="bttn">
                            <textarea placeholder="Your message" cols="30" rows="8"></textarea>
                            <input type="submit" value="Submit" className="btn" />
                        </div>
                    </form>

                    <iframe
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.8559062837!2d72.72507159274966!3d23.560110181742456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db56e2f3d16a9%3A0x480f5022b1db7329!2sVijapur%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710083990028!5m2!1sen!2sin"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
