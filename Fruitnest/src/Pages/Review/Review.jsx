import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';

function Review() {
    return (
        <div>
            <div className="heading">
                <h1>client's reviews</h1>
                <p>
                    <Link to="/">Home<span>{">>"}</span></Link> review
                </p>
            </div>

            <section className="info-container">
                <div className="info">
                    <div className="image" style={{ backgroundImage: "url('Images/scooter_147272.png')" }}></div>
                    <div className="content">
                        <h3>fast delivery</h3>
                        <span>within 30 minutes</span>
                    </div>
                </div>
                <div className="info">
                    <div className="image" style={{ backgroundImage: "url('Images/phone-call_3616215.png')" }}></div>
                    <div className="content">
                        <h3>available on phone</h3>
                        <span>anytime</span>
                    </div>
                </div>
                <div className="info">
                    <div className="image" style={{ backgroundImage: "url('Images/pay_625599.png')" }}></div>
                    <div className="content">
                        <h3>easy payments</h3>
                        <span>cash or UPI</span>
                    </div>
                </div>
            </section>

            <section className="review">
                <div className="box">
                    <div className="user">
                        <div className="image" style={{ backgroundImage: "url('Images/male.png')" }}></div>
                        <div className="info">
                            <h3>Shlok</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate tenetur cum aut fugit? Dolores fuga similique officia vel laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam est magni fuga, nostrum porro recusandae.</p>
                </div>
                <div className="box">
                    <div className="user">
                        <div className="image" style={{ backgroundImage: "url('Images/female.png')" }}></div>
                        <div className="info">
                            <h3>Avani</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate tenetur cum aut fugit? Dolores fuga similique officia vel laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, architecto voluptas. Consectetur alias quia fuga animi, at, accusantium ea obcaecati.</p>
                </div>
                <div className="box">
                    <div className="user">
                        <div className="image" style={{ backgroundImage: "url('Images/male.png')" }}></div>
                        <div className="info">
                            <h3>Anshuman</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate tenetur cum aut fugit? Dolores fuga similique officia vel laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, laudantium impedit obcaecati asperiores blanditiis ipsa.</p>
                </div>
                <div className="box">
                    <div className="user">
                        <div className="image" style={{ backgroundImage: "url('Images/female.png')" }}></div>
                        <div className="info">
                            <h3>Simran</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate tenetur cum aut fugit? Dolores fuga similique officia vel laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo inventore provident, nostrum in odit? Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="box">
                    <div className="user">
                        <div className="image" style={{ backgroundImage: "url('Images/male.png')" }}></div>
                        <div className="info">
                            <h3>Virat</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate tenetur cum aut fugit? Dolores fuga similique officia vel laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. natus adipisci, rerum odit nulla quis porro quas Lorem ipsum dolor, sit amet elit. Quia, tempora.</p>
                </div>
                <div className="box">
                    <div className="user">
                        <div className="image" style={{ backgroundImage: "url('Images/female.png')" }}></div>
                        <div className="info">
                            <h3>Anushka</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate tenetur cum aut fugit? Dolores fuga similique officia vel laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem ducimus repellat aut dolor iste quia, pariatur quasi molestias? Hic?</p>
                </div>
            </section>
        </div>
    );
}

export default Review;
