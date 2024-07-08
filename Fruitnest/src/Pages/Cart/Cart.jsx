import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import Heading from '../../Components/Heading/Heading';

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
            <Heading name1="Shopping Cart" name2="Cart" />

            {cartItems.length === 0 && !checkoutMessage ? (
                <p className="empty text-5xl text-center pt-36 pb-[32rem] normal-case font-semibold">Your cart is empty.</p>
            ) : (
                <section className="w-full">
                    {cartItems.map((item, index) => (
                        <div key="item.id" className="flex h-[20rem] shadow-[0.1rem_0.2rem_0.2rem_0.1rem_#a8a297] items-center justify-between w-full">
                            <div className="grid grid-cols-2 sm:gap-0 w-4/5">
                                <div className="h-[15rem] bg-contain bg-center bg-no-repeat justify-center flex items-center"
                                    style={{ backgroundImage: `url(${item.image})` }}>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="text-3xl sm:text-4xl text-black font-semibold">{item.name}</h3>
                                        <h2 className="text-2xl sm:text-3xl text-black mt-6"><i className="fa fa-indian-rupee-sign"></i>{item.price}</h2>
                                    </div>

                                    <div className="quantity-control text-2xl sm:text-3xl flex flex-col items-center justify-center">
                                        <div className="flex items-center space-x-4">
                                            <button
                                                className="px-4 py-2 bg-gray-200 text-black rounded"
                                                onClick={() => decrementQuantity(item.id)}
                                            >-</button>
                                            <span className="text-nowrap px-4 py-2 text-black rounded">{item.quantity} kg</span>
                                            <button
                                                className="px-4 py-2 bg-gray-200 text-black rounded"
                                                onClick={() => incrementQuantity(item.id)}
                                            >+</button>
                                        </div>
                                        <h3 className=" rext-2xl sm:text-3xl text-black  text-center mt-4"><i className="fa fa-indian-rupee-sign"></i>{item.price * item.quantity}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className='text-center text-3xl mr-9 w-1/5' >
                                <i className="fas fa-times text-[#ff9421] cursor-pointer hover:text-[#cf1a1a]" onClick={() => removeFromCart(item.id)}></i>
                            </div>

                        </div>

                    ))}

                    <h3 className="total text-3xl sm:text-4xl text-center mt-[7rem] font-semibold">Total: <span><i className="fa fa-indian-rupee-sign"></i>{totalPrice}</span></h3>
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

// <section className="shopping-cart py-32 items-center w-full flex flex-col mx-5 my-auto bg-white">
//     <table className="w-full border-collapse  text-xl sm:text-3xl">
//         <thead className="bg-slate-200 font-semibold border border-solid border-gray-300 sm:h-[12rem] h-[7rem] p-3">
//             <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Amount</th>
//                 <th>Remove</th>
//             </tr>
//         </thead>
//         <tbody>
//             {cartItems.map(item => (
//                 <tr key={item.id} className="border border-solid border-gray-300 sm:h-[10rem] border-collapse h-[7rem] p-3">
//                     <td>
//                         <div
//                             className="image w-full h-[5rem] sm:h-[12rem] bg-contain bg-center bg-no-repeat"
//                             style={{ backgroundImage: `url(${item.image})` }}
//                         ></div>
//                     </td>
//                     <td className='text-center'>{item.name}</td>
//                     <td className='text-center'><i className="fa fa-indian-rupee-sign"></i>{item.price}</td>
//                     <td className='text-center'>
//                         <div className="quantity-control text-lg sm:text-3xl">
//                             <button className='w-6 h-6  sm:w-8 sm:h-8 mx-1 sm:mx-3 bg-white hover:bg-[#a8a297] border border-solid border-[#a8a297] hover:border-black' onClick={() => decrementQuantity(item.id)}>-</button>
//                             {item.quantity} kg
//                             <button className='w-6 h-6  sm:w-8 sm:h-8 mx-1 sm:mx-3 bg-white hover:bg-[#a8a297] border border-solid border-[#a8a297] hover:border-black' onClick={() => incrementQuantity(item.id)}>+</button>
//                         </div>
//                     </td>
//                     <td className='text-center'><i className="fa fa-indian-rupee-sign"></i>{item.price * item.quantity}</td>
//                     <td className='text-center'>
//                         <i className="fas fa-times text-[#ff9421] cursor-pointer hover:text-[#cf1a1a]" onClick={() => removeFromCart(item.id)}></i>
//                     </td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
//     <h3 className="total text-3xl sm:text-4xl text-center mt-[7rem] font-semibold">Total: <span><i className="fa fa-indian-rupee-sign"></i>{totalPrice}</span></h3>
//     <div className='button-container flex flex-col items-center justify-center'>
//         <button className="btn p-3 text-white rounded-lg text-3xl mt-5" onClick={handleCheckout}>Checkout Cart</button>
//         {checkoutMessage && <p className="checkout-message mt-4 normal-case text-3xl text-center">{checkoutMessage}</p>}
//     </div>
// </section>