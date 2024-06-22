import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>

            <div className="heading">
                <h1>About Us</h1>
                <p><Link to="/">Home &gt;&gt;</Link> About</p>
            </div>
            <section className="about">
                <div className="content">
                    <h1>Welcome to Our Shop</h1>
                    <h3>Fresh & Organic Fruits</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate praesentium possimus incidunt
                        ratione quibusdam sit tenetur perferendis rem odit impedit eius soluta doloremque esse accusantium
                        facere maiores sint mollitia. Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Modi aperiam velit, ipsa quas unde, culpa rerum voluptate
                        sunt ad vitae quia iste esse temporibus perferendis quibusdam nesciunt in ratione molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis saepe voluptatum a dignissimos
                        harum eligendi quisquam corrupti reprehenderit suscipit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nisi veniam explicabo
                        asperiores dolore voluptatem. Sit magni doloribus quisquam minima? Sit modi, quisquam nam maiores,
                        accusamus doloremque et voluptatem ea corrupti illum at sequi cupiditate voluptatibus debitis itaque
                        minus aliquam ipsa? Voluptatem sed
                        minima in corrupti odio impedit, adipisci laborum maiores.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis animi ipsum mollitia.
                        Temporibus obcaecati id porro sint nobis, ex fugiat omnis delectus harum atque suscipit voluptatibus
                        nisi aperiam corrupti? Lorem ipsum dolor
                        sit amet.
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
