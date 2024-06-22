import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './Fruits.css';

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
        <div className="box">
            <div className="image" style={{ backgroundImage: `url(${fruit.image})` }}></div>
            <div className="content">
                <h3>{fruit.name}</h3>
                <div className="price"><i className="fa fa-indian-rupee-sign"></i>{fruit.price}</div>
                <div className="quantity-control">
                    <button onClick={handleDecrement}>-</button>
                    <span>{fruit.quantity} kg</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className='addtocart'>
                    <Link to='#' className="btn" onClick={handleAddToCart}>add to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Fruits;
