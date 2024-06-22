import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            image: 'SliderImages/strawberry2.jpg',
            date: '5th Nov, 2022',
            author: 'admin',
            title: 'Blog title goes here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nulla doloremque dolor! Sit beatae minus corrupti.',
            link: '#'
        },
        {
            image: 'SliderImages/orange3.jpg',
            date: '25th Nov, 2022',
            author: 'admin',
            title: 'Blog title goes here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nulla doloremque dolor! Sit beatae minus corrupti.',
            link: '#'
        },
        {
            image: 'SliderImages/grapes.jpg',
            date: '11th Dec, 2022',
            author: 'admin',
            title: 'Blog title goes here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nulla doloremque dolor! Sit beatae minus corrupti.',
            link: '#'
        },
        {
            image: 'SliderImages/pears.jpg',
            date: '3rd Jan, 2023',
            author: 'admin',
            title: 'Blog title goes here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nulla doloremque dolor! Sit beatae minus corrupti.',
            link: '#'
        },
        {
            image: 'SliderImages/361096.jpg',
            date: '28th Feb, 2023',
            author: 'admin',
            title: 'Blog title goes here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nulla doloremque dolor! Sit beatae minus corrupti.',
            link: '#'
        },
        {
            image: 'SliderImages/banana.jpg',
            date: '21st June, 2023',
            author: 'admin',
            title: 'Blog title goes here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nulla doloremque dolor! Sit beatae minus corrupti.',
            link: '#'
        },
    ];

    return (
        <div>
            <div className="heading">
                <h1>Our Blog</h1>
                <p><Link to="/">Home <span>{">>"}</span></Link> Blog</p>
            </div>

            <section className="blogs">
                {/* <h1 className="title"> Our <span>Blog</span></h1> */}
                <div className="box-container">
                    {blogPosts.map((post, index) => (
                        <div className="box" key={index}>
                            <div className="image" style={{ backgroundImage: `url(${post.image})` }}></div>
                            <div className="content">
                                <div className="icons">
                                    <Link to="#"><i className="fas fa-calendar"></i> {post.date} </Link>
                                    <Link to="#"><i className="fas fa-user"></i> by {post.author} </Link>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <Link to={post.link} className="button">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div >
    );
};

export default Blog;
