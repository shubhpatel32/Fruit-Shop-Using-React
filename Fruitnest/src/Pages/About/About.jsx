import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>

            <div className="heading">
                <h1>About Us</h1>
                <p><Link to="/">Home</Link><span>{">>"}</span> About</p>
            </div>
            <section className="about">
                <div className="content">
                    <h1>Welcome to Our Shop</h1>
                    <h3>Fresh & Organic Fruits</h3>
                    <p>
                        Welcome to Fruit Nest, your ultimate online destination dedicated to bringing you the finest selection of fruits from around the world. At Fruit Nest, we're passionate about ensuring every fruit you receive is not only delicious but also of the highest quality. Our commitment begins with partnering directly with trusted farmers who share our values of sustainability and ethical farming practices. This direct relationship allows us to carefully handpick each fruit at its peak ripeness, ensuring optimal flavor and nutrition.


                    </p>
                    <p>
                        Fruit Nest is more than just a marketplace; it's a community of fruit enthusiasts and health-conscious individuals who value wholesome living. We believe that enjoying fresh fruits should be both a pleasure and a source of nourishment. From the juicy sweetness of California strawberries to the exotic allure of Costa Rican pineapples, each fruit in our selection tells a story of its origin and journey to your table.
                    </p>
                    <p>
                        Our platform not only offers convenience but also empowers you to make informed choices about what you consume. We strive to provide transparency in our sourcing, ensuring that every fruit meets rigorous quality standards before it reaches your doorstep. Whether you're looking for everyday fruits for your family or exotic varieties to explore new flavors, Fruit Nest is here to cater to your cravings and culinary adventures.
                    </p>
                    <p>
                        Fruits are nature's nutritional powerhouses, packed with essential vitamins, minerals, and antioxidants that are vital for overall health and well-being. From vitamin C in citrus fruits that boosts immune function to potassium in bananas that supports heart health, each fruit offers a unique combination of nutrients. These nutrients not only help to maintain proper bodily functions but also play a crucial role in preventing chronic diseases such as heart disease, diabetes, and certain cancers. Regular consumption of fruits as part of a balanced diet can contribute significantly to maintaining optimal health throughout life.
                    </p>
                    <p>
                        Join us on this flavorful journey where health meets taste, and discover why Fruit Nest is your trusted partner in bringing nature's goodness right to your home.
                    </p>
                    <Link to="#" className="butn">Read More</Link>
                </div>
            </section>

            <section className="gallery">
                <h1 className="title"><span>Gallery</span></h1>
                <div className="box-container">
                    <div className="box" style={{ backgroundImage: `url('SliderImages/black-bg.avif')` }}></div>
                    <div className="box" style={{ backgroundImage: `url('SliderImages/1289155.jpg')` }}></div>
                    <div className="box" style={{ backgroundImage: `url('SliderImages/361096.jpg')` }}></div>
                    <div className="box" style={{ backgroundImage: `url('SliderImages/773380.jpg')` }}></div>
                    <div className="box" style={{ backgroundImage: `url('SliderImages/786700.jpg')` }}></div>
                    <div className="box" style={{ backgroundImage: `url('SliderImages/strawberry.jpg')` }}></div>

                </div>
            </section>

        </div >
    )
}

export default About
