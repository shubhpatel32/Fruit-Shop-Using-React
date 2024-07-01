import React, { useState } from 'react';
// import './Cart.css';
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
                <section className="shopping-cart py-32 items-center w-full flex flex-col mx-5 my-auto bg-white rounded-lg shadow-[0.1rem_0.2rem_0.2rem_0.1rem_#a8a297]">
                    <table className="w-full border-collapse mb-5 text-xl md:text-2xl">
                        <thead className="bg-slate-200 font-semibold border-b border-solid border-[#ddd] md:h-[10rem] h-[5rem] p-3">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id} className="border-b border-solid border-[#ddd] md:h-[10rem] h-[5rem] p-3">
                                    <td>
                                        <div
                                            className="image w-full h-[5rem] md:h-[10rem] bg-contain bg-center bg-no-repeat"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        ></div>
                                    </td>
                                    <td className='text-center'>{item.name}</td>
                                    <td className='text-center'><i className="fa fa-indian-rupee-sign"></i>{item.price}</td>
                                    <td className='text-center'>
                                        <div className="quantity-control">
                                            <button onClick={() => decrementQuantity(item.id)}>-</button>
                                            {item.quantity} kg
                                            <button onClick={() => incrementQuantity(item.id)}>+</button>
                                        </div>
                                    </td>
                                    <td className='text-center'><i className="fa fa-indian-rupee-sign"></i>{item.price * item.quantity}</td>
                                    <td className='text-center'>
                                        <i className="fas fa-times text-[#ff9421] cursor-pointer hover:text-[#cf1a1a]" onClick={() => removeFromCart(item.id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3 className="total text-2xl md:text-3xl text-center mt-5 font-semibold">Total: <span><i className="fa fa-indian-rupee-sign"></i>{totalPrice}</span></h3>
                    <div className='button-container flex flex-col items-center justify-center'>
                        <button className="btn p-3 text-white rounded-lg text-3xl mt-5" onClick={handleCheckout}>Checkout Cart</button>
                        {checkoutMessage && <p className="checkout-message mt-4">{checkoutMessage}</p>}
                    </div>
                </section>
            )}
        </div>
    );
}

export default Cart;
