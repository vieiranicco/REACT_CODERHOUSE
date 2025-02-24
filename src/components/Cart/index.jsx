// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./style.css";

export const Cart = () => {
    const [itemCount, setItemCount] = useState(0); 
    const [isCartOpen, setIsCartOpen] = useState(false); 

    const handleAddItem = () => {
        setItemCount(itemCount + 1);
    };

    const handleRemoveItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); 
    };

    return (
        <div style={{ position: 'relative' }}>
            {}
            <div className="cart-icon" onClick={toggleCart}>
                <FaShoppingCart style={{ fontSize: '1.5rem', color: 'white' }} />
                {itemCount > 0 && (
                    <span className="cart-count">
                        {itemCount}
                    </span>
                )}
            </div>

            {}
            {isCartOpen && (
                <div className="cart-panel">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={handleRemoveItem} disabled={itemCount === 0}>
                            Remover
                        </button>
                        <span>Itens no carrinho: {itemCount}</span>
                        <button onClick={handleAddItem}>
                            Adicionar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

