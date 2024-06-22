import React from 'react';
import Slideshow from './Slideshow';
import Banner from './Banner';


function Home() {
    const slideshowImages = [
        'SliderImages/strawberry.jpg',
        'SliderImages/1212130.jpg',
        'SliderImages/orange.jpg',
        'SliderImages/orange-21.jpg',
        'SliderImages/361096.jpg',
    ];

    const banners = [
        {
            image: 'Images/apple.jpg',
            title: 'Apple',
            discount: 'Upto 30% off',
            link: '/shop',
        },
        {
            image: 'Images/orange.jpg',
            title: 'Orange',
            discount: 'Upto 20% off',
            link: '/shop',
        },
        {
            image: 'Images/mango.jpeg',
            title: 'Mango',
            discount: 'Upto 15% off',
            link: '/shop',
        },
        {
            image: 'Images/banana.webp',
            title: 'Banana',
            discount: 'Upto 40% off',
            link: '/shop',
        },
        {
            image: 'Images/strawberry.jpg',
            title: 'Strawberry',
            discount: 'Upto 10% off',
            link: '/shop',
        },
        {
            image: 'Images/grapes.jpg',
            title: 'Grapes',
            discount: 'Upto 25% off',
            link: '/shop',
        },
    ];

    return (
        <div className="home">
            <Slideshow images={slideshowImages} />
            <section className="banner-container">
                {banners.map((banner, index) => (
                    <Banner
                        key={index}
                        image={banner.image}
                        title={banner.title}
                        discount={banner.discount}
                        link={banner.link}
                    />
                ))}
            </section>
        </div>
    );
}

export default Home;
