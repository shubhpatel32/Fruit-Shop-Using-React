import React, { useState, useEffect } from 'react';
import './Slideshow.css';

function Slideshow({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="home">
            <div className="slides-container">
                {images.map((image, index) => (
                    <div className={`slide ${index === activeIndex ? 'active' : ''}`} key={index}>
                        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Slideshow;
