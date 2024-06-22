import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

function Cart() {

    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, emptyCart } = useCart();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <div className="heading">
                <h1>Shopping Cart</h1>
            </div>
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
                    <Link to="#" className="btn" onClick={() => emptyCart()}>Checkout Cart</Link>
                </div>
            </section>
        </div>
    );
}

export default Cart;
