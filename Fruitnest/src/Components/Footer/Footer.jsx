import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Quick Links</h3>
                        <Link to="/"><i className="fas fa-arrow-right"></i> home</Link>
                        <Link to="/shop"><i className="fas fa-arrow-right"></i> shop</Link>
                        <Link to="/about"><i className="fas fa-arrow-right"></i> about</Link>
                        <Link to="/review"><i className="fas fa-arrow-right"></i> review</Link>
                        <Link to="/blog"><i className="fas fa-arrow-right"></i> blog</Link>
                        <Link to="/contact"><i className="fas fa-arrow-right"></i> contact</Link>
                    </div>

                    <div className="box">
                        <h3>Extra Links</h3>
                        <Link to="/cart"> <i className="fas fa-arrow-right"></i> My Order</Link>
                        <Link to="#"> <i className="fas fa-arrow-right"></i> My Favourite</Link>
                        <Link to="#"> <i className="fas fa-arrow-right"></i> My Wishlist</Link>
                        <Link to="/login"> <i className="fas fa-arrow-right"></i> My Account</Link>
                        <Link to="#"> <i className="fas fa-arrow-right"></i> Terms or Use</Link>
                    </div>

                    <div className="box">
                        <h3>Follow us</h3>
                        <Link to="#"><i className="fa-brands fa-facebook"></i> facebook</Link>
                        <Link to="#"><i className="fa-brands fa-instagram"></i> instagram</Link>
                        <Link to="#"><i className="fa-brands fa-twitter"></i> twitter</Link>
                        <Link to="#"><i className="fa-brands fa-linkedin"></i> linkedin</Link>
                        <Link to="#"><i className="fa-brands fa-pinterest"></i> pinterest</Link>
                    </div>


                    <div className="box">
                        <h3>Newsletter</h3>
                        <p>Subscribe for latest updates</p>
                        <form action="#">
                            <input type="email" placeholder="email" />
                            <input type="submit" value="subscribe" className='btn' />

                        </form>
                        <div className="payment">
                            <Link to="#"><i className="fa-brands fa-google-pay"></i></Link>
                            <Link to="#"><i className="fa-regular fa-credit-card"></i></Link>
                            <Link to="#"><i className="fa-brands fa-apple-pay"></i></Link>
                            <Link to="#"><i className="fa-brands fa-amazon-pay"></i></Link>
                        </div>
                    </div>

                </div>
            </section>

            <div className="credit">Created by Shubh Patel | All rights reserved!</div>
        </div>
    )
}
