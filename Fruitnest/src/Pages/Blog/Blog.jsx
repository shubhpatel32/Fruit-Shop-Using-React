import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            image: 'SliderImages/strawberry2.jpg',
            date: '5th Nov, 2022',
            author: 'Admin',
            title: 'The Sweet Taste of Strawberries',
            description: 'Explore the delightful world of strawberries and discover why they are nature\'s candy. From their vibrant color to their juicy flavor, strawberries are a treat for both the eyes and the palate.',
            link: '#'
        },
        {
            image: 'SliderImages/orange3.jpg',
            date: '25th Nov, 2022',
            author: 'Admin',
            title: 'Oranges: Bursting with Vitamin C',
            description: 'Discover the health benefits of oranges and how they can boost your immune system. Packed with vitamin C and refreshing citrus flavor, oranges are a must-have in your daily diet.',
            link: '#'
        },
        {
            image: 'SliderImages/grapes.jpg',
            date: '11th Dec, 2022',
            author: 'Admin',
            title: 'Grapes: Nature\'s Bite-Sized Snack',
            description: 'Delve into the world of grapes and their versatility as a snack and ingredient. Whether fresh or dried, grapes offer a burst of sweetness and a wealth of nutrients.',
            link: '#'
        },
        {
            image: 'SliderImages/pears.jpg',
            date: '3rd Jan, 2023',
            author: 'Admin',
            title: 'The Crispness of Pears',
            description: 'Explore the crisp and refreshing flavor of pears, perfect for snacking or incorporating into recipes. Learn about the different varieties and their unique characteristics.',
            link: '#'
        },
        {
            image: 'SliderImages/361096.jpg',
            date: '28th Feb, 2023',
            author: 'Admin',
            title: 'Apples: A Taste of Orchard Freshness',
            description: 'Discover the delightful taste and health benefits of apples. From sweet to tart, apples are a versatile fruit that can be enjoyed fresh, baked, or as a nutritious snack.',
            link: '#'
        },
        {
            image: 'SliderImages/banana.jpg',
            date: '21st June, 2023',
            author: 'Admin',
            title: 'Bananas: Nature\'s Energy Booster',
            description: 'Learn about the nutritional value and energy-boosting benefits of bananas. Packed with potassium and fiber, bananas are an excellent choice for a quick and nutritious snack.',
            link: '#'
        },
    ];

    return (
        <div>
            <div className="heading">
                <h1>Our Blogs</h1>
                <p><Link to="/">Home</Link><span>{">>"}</span> Blog</p>
            </div>

            <section className="blogs">
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
        </div>
    );
};

export default Blog;
