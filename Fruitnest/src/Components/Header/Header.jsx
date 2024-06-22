import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './Header.css';

const Header = () => {

    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((total, item) => total + (item.quantity / item.quantity), 0);

    return (
        <header className="header">
            <Link to="/" className="logo"><i className="fa-solid fa-apple-whole"></i>Fruitnest</Link>

            <nav className="navbar">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                <NavLink to="/review" className={({ isActive }) => (isActive ? 'active' : '')}>Review</NavLink>
                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </nav>

            <div className="icons">
                <div id="menu-btn" className="fas fa-bars"></div>
                {/* <div id="search-btn" className="fas fa-search"></div> */}
                <div className="cart-count">
                    <NavLink to="/cart" id="cart-btn" className="fas fa-cart-shopping"></NavLink>
                    <span className="count">{cartCount}</span>
                </div>
                <NavLink to="/login" id="login-btn" className="fas fa-user"></NavLink>
            </div>

            <form action="" className="search-form">
                <input type="search" placeholder="Search here" id="search-box" />
                <label htmlFor="search-box" className="fas fa-search"></label>
            </form>

            {/* <div className="shopping-cart">
                <div className="box">
                    <i className="fas fa-times"></i>
                    <div className="image" style={{ backgroundImage: 'url(Images/apple.jpg)' }}></div>
                    <div className="content">
                        <h3>Apple</h3>
                        <span className="quantity">1kg</span>
                        <span className="multiply">*</span>
                        <span className="price"><i className="fa fa-indian-rupee-sign"></i>50</span>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-times"></i>
                    <div className="image" style={{ backgroundImage: 'url(Images/banana.webp)' }}></div>
                    <div className="content">
                        <h3>Banana</h3>
                        <span className="quantity">1kg</span>
                        <span className="multiply">*</span>
                        <span className="price"><i className="fa fa-indian-rupee-sign"></i>15</span>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-times"></i>
                    <div className="image" style={{ backgroundImage: 'url(Images/mango.jpeg)' }}></div>
                    <div className="content">
                        <h3>mango</h3>
                        <span className="quantity">1kg</span>
                        <span className="multiply">*</span>
                        <span className="price"><i className="fa fa-indian-rupee-sign"></i>40</span>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-times"></i>
                    <div className="image" style={{ backgroundImage: 'url(Images/orange.jpg)' }}></div>
                    <div className="content">
                        <h3>Orange</h3>
                        <span className="quantity">1kg</span>
                        <span className="multiply">*</span>
                        <span className="price"><i className="fa fa-indian-rupee-sign"></i>25</span>
                    </div>
                </div>

                <h3 className="total">Total: <span><i className="fa fa-indian-rupee-sign"></i>130</span></h3>
                <Link to="#" className="btn">Checkout Cart</Link>
            </div> */}

            {/* <form action="" className="login-form">
                <h3>login</h3>
                <input type="email" placeholder="email" className="box" />
                <input type="password" placeholder="password" className="box" />
                <div className="remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">remember me</label>
                </div>
                <input type="submit" value="login now" className="btn" />
                <p>forget password? <Link to="#">click here</Link></p>
                <p>Do not have an account? <Link to="#">create</Link></p>
            </form> */}
        </header>
    );
};

export default Header;
