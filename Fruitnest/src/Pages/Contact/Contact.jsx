import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [contactError, setContactError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setNameError('');
        setEmailError('');
        setContactError('');
        setSubjectError('');
        setMessageError('');

        // Validation
        let isValid = true;
        if (!name) {
            setNameError('Name is required.');
            isValid = false;
        }
        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        }
        if (!contact) {
            setContactError('Contact number is required.');
            isValid = false;
        }
        if (!subject) {
            setSubjectError('Subject is required.');
            isValid = false;
        }

        // Submit if valid
        if (isValid) {
            // Perform form submission logic here (e.g., API call)
            console.log('Submitting form:', { name, email, contact, subject, message });

            // Reset form fields after successful submission (if needed)
            setName('');
            setEmail('');
            setContact('');
            setSubject('');
            setMessage('');
        }
    };

    return (
        <div>
            <div className="heading">
                <h1>Contact</h1>
                <p>
                    <Link to="/">Home</Link><span>{">>"}</span> Contact
                </p>
            </div>

            <section className="contact flex flex-col">

                <div className="icons-container w-full gap-8 grid md:grid-cols-3 grid-cols-1">
                    <div className="icons text-center border-2 border-solid border-[#a8a297] p-8">
                        <i className="fa-solid fa-phone h-24 w-24 text-4xl leading-[6rem] bg-[#ff9421] text-white rounded-full hover:bg-[#cf1a1a]"></i>
                        <h3>Contact Number</h3>
                        <p>12345678910</p>
                        <p>5566778899</p>
                    </div>

                    <div className="icons text-center border-2 border-solid border-[#a8a297] p-8">
                        <i className="fa-solid fa-envelope h-24 w-24 text-4xl leading-[6rem] bg-[#ff9421] text-white rounded-full hover:bg-[#cf1a1a]"></i>
                        <h3>Email</h3>
                        <p>fruitnest@gmail.com</p>
                    </div>

                    <div className="icons text-center border-2 border-solid border-[#a8a297] p-8">
                        <i className="fa-solid fa-location-dot h-24 w-24 text-4xl leading-[6rem] bg-[#ff9421] text-white rounded-full hover:bg-[#cf1a1a]"></i>
                        <h3>Address</h3>
                        <p>Vijapur, Mehsana, Gujarat - 382870</p>
                    </div>
                </div>

                <div className="row">
                    <form onSubmit={handleFormSubmit}>
                        <h3>Get in Touch</h3>

                        <div className="inputbox">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="box"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && <p className="error">{nameError}</p>}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="box"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>

                        <div className="inputbox">
                            <input
                                type="text"
                                placeholder="Enter your contact number"
                                className="box"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            {contactError && <p className="error">{contactError}</p>}
                            <input
                                type="text"
                                placeholder="Enter your subject"
                                className="box"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            {subjectError && <p className="error">{subjectError}</p>}
                        </div>

                        <div className="bttn">
                            <textarea
                                placeholder="Your message"
                                cols="30"
                                rows="8"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            {messageError && <p className="error">{messageError}</p>}
                            <input type="submit" value="Submit" className="btn" />
                        </div>
                    </form>

                    {/* Google Maps iframe */}
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
