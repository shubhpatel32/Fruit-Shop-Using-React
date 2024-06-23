import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

function Cart() {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, emptyCart } = useCart();
    const [checkoutMessage, setCheckoutMessage] = useState('');
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            emptyCart();
            setCheckoutMessage('Thank you for your purchase!');
        } else {
            setCheckoutMessage('Your cart is empty.');
        }
    };

    return (
        <div>

            {cartItems.length === 0 && !checkoutMessage ? (
                <p className="empty">Your cart is empty.</p>
            ) : (
                <section className="shopping-cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price of 1Kg</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div
                                            className="image"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        ></div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td><i className="fa fa-indian-rupee-sign"></i>{item.price}</td>
                                    <td>
                                        <div className="quantity-control">
                                            <button onClick={() => decrementQuantity(item.id)}>-</button>
                                            {item.quantity} kg
                                            <button onClick={() => incrementQuantity(item.id)}>+</button>
                                        </div>
                                    </td>
                                    <td><i className="fa fa-indian-rupee-sign"></i>{item.price * item.quantity}</td>
                                    <td>
                                        <i className="fas fa-times" onClick={() => removeFromCart(item.id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3 className="total">Total: <span><i className="fa fa-indian-rupee-sign"></i>{totalPrice}</span></h3>
                    <div className='button-container'>
                        <button className="btn" onClick={handleCheckout}>Checkout Cart</button>
                        {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
                    </div>
                </section>
            )}
        </div>
    );
}

export default Cart;
