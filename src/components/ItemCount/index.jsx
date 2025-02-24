import React from 'react'; // eslint-disable-line no-unused-vars
import { useState } from 'react';
import './style.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="quantity-controls">
                <button onClick={handleDecrement} disabled={quantity === 1}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement} disabled={quantity === stock}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => onAdd(quantity)} disabled={stock === 0}>
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default ItemCount;