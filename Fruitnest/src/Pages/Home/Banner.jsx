import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner({ image, title, discount, link }) {
    return (
        <div className="banner">
            <div className="bgimage" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="content">
                <h3>{title}</h3>
                <h2>{discount}</h2>
                <Link to={link} className="btn">Shop now</Link>
            </div>
        </div>
    );
}

export default Banner;
