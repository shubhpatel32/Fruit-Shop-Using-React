import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';

function Review() {
    const reviews = [
        { name: "Shlok", role: "happy client", image: "Images/male.png", comment: "I'm very impressed with the quick delivery service. The scooter arrived within 30 minutes of placing my order. Excellent service!" },
        { name: "Avani", role: "happy client", image: "Images/female.png", comment: "Great customer support! I can always reach them on the phone, no matter the time. Really convenient for busy people like me." },
        { name: "Anshuman", role: "happy client", image: "Images/male.png", comment: "The payment process is so easy! I love the flexibility to pay with cash or UPI. It makes transactions hassle-free." },
        { name: "Simran", role: "happy client", image: "Images/female.png", comment: "Absolutely amazing service! The delivery was prompt and the customer service is top-notch. Highly recommended!" },
        { name: "Virat", role: "happy client", image: "Images/male.png", comment: "Impressed with the professionalism! They really take care of every detail. Will definitely use their service again." },
        { name: "Anushka", role: "happy client", image: "Images/female.png", comment: "Superb experience! The entire process was seamless from start to finish. Their attention to customer satisfaction is commendable." },
        { name: "Riya", role: "satisfied customer", image: "Images/female.png", comment: "Quick response and effective service! I'm glad I chose them for my delivery needs. Their reliability sets them apart." },
        { name: "Kabir", role: "regular customer", image: "Images/male.png", comment: "Consistently excellent service! I've been using their service for months now and they never disappoint. Highly reliable!" },
        { name: "Priya", role: "new customer", image: "Images/female.png", comment: "First-time user and very impressed! The whole experience was smooth and efficient. Definitely recommend to others." },
    ];

    return (
        <div>
            <div className="heading">
                <h1>Client's Reviews</h1>
                <p>
                    <Link to="/">Home</Link><span>{">>"}</span> review
                </p>
            </div>

            <section className="info-container">
                <div className="info">
                    <div className="image" style={{ backgroundImage: "url('Images/scooter_147272.png')" }}></div>
                    <div className="content">
                        <h3>Fast Delivery</h3>
                        <span>Within 30 minutes</span>
                    </div>
                </div>
                <div className="info">
                    <div className="image" style={{ backgroundImage: "url('Images/phone-call_3616215.png')" }}></div>
                    <div className="content">
                        <h3>Available on Phone</h3>
                        <span>Anytime</span>
                    </div>
                </div>
                <div className="info">
                    <div className="image" style={{ backgroundImage: "url('Images/pay_625599.png')" }}></div>
                    <div className="content">
                        <h3>Easy Payments</h3>
                        <span>Cash or UPI</span>
                    </div>
                </div>
            </section>

            <section className="review">
                {reviews.map((review, index) => (
                    <div className="box" key={index}>
                        <div className="user">
                            <div className="image" style={{ backgroundImage: `url('${review.image}')` }}></div>
                            <div className="info">
                                <h3>{review.name}</h3>
                                <span>{review.role}</span>
                            </div>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Review;
