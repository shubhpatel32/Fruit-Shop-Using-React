import React from 'react';
import { Link } from 'react-router-dom';
import './Newblogs.css';

const Newblogs = ({ image, date, title, author, description }) => {

    return (

        <div className="box">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="content">
                <div className="icons">
                    <Link to="#"><i className="fas fa-calendar"></i> {date} </Link>
                    <Link to="#"><i className="fas fa-user"></i> by {author} </Link>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default Newblogs;
