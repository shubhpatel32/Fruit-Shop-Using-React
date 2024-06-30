import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
// import './Fruits.css';

const Fruits = ({ fruit }) => {
    const { addToCart, incrementQuantity, decrementQuantity } = useCart();

    const handleAddToCart = () => {
        addToCart(fruit);
    };

    const handleDecrement = () => {
        decrementQuantity(fruit.id);
    };

    const handleIncrement = () => {
        incrementQuantity(fruit.id);
    };

    return (
        <div className="box flex flex-col justify-between text-center h-[30rem] md:h-[35rem] w-full overflow-hidden shadow-[0.1rem_0.2rem_0.2rem_0.1rem_#a8a297] hover:shadow-[0.3rem_0.5rem_0.5rem_0.3rem_#a8a297]">
            <div className="image bg-white h-[20rem] w-full bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${fruit.image})` }}></div>
            <div className="p-4 justify-center">
                <h3 className="text-3xl font-semibold">{fruit.name}</h3>
                <div className="price font-bold text-[1.8rem] text-black py-4"><i className="fa fa-indian-rupee-sign"></i>{fruit.price}</div>
                {/* <div className="quantity-control text-[1.8rem]">
                    <button className="w-[2.5rem] h-[2.5rem] m-4 bg-white border border-[#a8a297] hover:border-black" onClick={handleDecrement}>-</button>
                    <span>{fruit.quantity} kg</span>
                    <button className="w-[2.5rem] h-[2.5rem] m-4 bg-white border border-[#a8a297] hover:border-black" onClick={handleIncrement}>+</button>
                </div> */}
                <div className='addtocart items-center'>
                    <Link to='#' className="btn rounded bg-[#ff9421] text-white py-2 px-4 justify-center items-center" onClick={handleAddToCart}>add to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Fruits;
