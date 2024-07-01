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
            <div className="heading bg-cover bg-center bg-no-repeat text-center pt-48 pb-32" style={{ backgroundImage: `url('/SliderImages/gradient bg.avif')` }}>
                <h1 className="text-black text-[4rem]">About Us</h1>
                <p className="pt-2 text-3xl text-black font-bold">
                    <Link to="/" className="text-black pr-2 hover:text-red-700">Home</Link>
                    <span className="hover:text-black">{">>"}</span> About
                </p>
            </div>
            {cartItems.length === 0 && !checkoutMessage ? (
                <p className="empty text-5xl text-center pt-36 pb-[32rem] normal-case font-semibold">Your cart is empty.</p>
            ) : (
                <section className="shopping-cart py-32 items-center w-full flex flex-col mx-5 my-auto bg-white">
                    <table className="w-full border-collapse  text-xl md:text-3xl">
                        <thead className="bg-slate-200 font-semibold border border-solid border-gray-300 md:h-[12rem] h-[7rem] p-3">
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
                                <tr key={item.id} className="border border-solid border-gray-300 md:h-[10rem] border-collapse h-[7rem] p-3">
                                    <td>
                                        <div
                                            className="image w-full h-[5rem] md:h-[12rem] bg-contain bg-center bg-no-repeat"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        ></div>
                                    </td>
                                    <td className='text-center'>{item.name}</td>
                                    <td className='text-center'><i className="fa fa-indian-rupee-sign"></i>{item.price}</td>
                                    <td className='text-center'>
                                        <div className="quantity-control text-lg md:text-3xl">
                                            <button className='w-6 h-6  sm:w-8 sm:h-8 mx-1 sm:mx-3 bg-white hover:bg-[#a8a297] border border-solid border-[#a8a297] hover:border-black' onClick={() => decrementQuantity(item.id)}>-</button>
                                            {item.quantity} kg
                                            <button className='w-6 h-6  sm:w-8 sm:h-8 mx-1 sm:mx-3 bg-white hover:bg-[#a8a297] border border-solid border-[#a8a297] hover:border-black' onClick={() => incrementQuantity(item.id)}>+</button>
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
                    <h3 className="total text-3xl md:text-4xl text-center mt-[7rem] font-semibold">Total: <span><i className="fa fa-indian-rupee-sign"></i>{totalPrice}</span></h3>
                    <div className='button-container flex flex-col items-center justify-center'>
                        <button className="btn p-3 text-white rounded-lg text-3xl mt-5" onClick={handleCheckout}>Checkout Cart</button>
                        {checkoutMessage && <p className="checkout-message mt-4 normal-case text-3xl text-center">{checkoutMessage}</p>}
                    </div>
                </section>
            )}
        </div>
    );
}

export default Cart;
