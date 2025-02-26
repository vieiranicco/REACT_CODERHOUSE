// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = ({ itemCount }) => {
    return (
        <div style={{ fontSize: "1.5rem", color: "white", marginLeft: "15px", position: 'relative' }}>
            <FaShoppingCart />
            {itemCount > 0 && (
                <span
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '2px 6px',
                        fontSize: '0.8rem',
                    }}
                >
                    {itemCount}
                </span>
            )}
        </div>
    );
};


const Cart = () => {
    const [itemCount, setItemCount] = useState(0);

    const handleAddItem = () => {
        setItemCount(itemCount + 1);
    };

    const handleRemoveItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={handleRemoveItem} disabled={itemCount === 0}>
                Remover
            </button>
            <span>Itens no carrinho: {itemCount}</span>
            <button onClick={handleAddItem}>
                Adicionar
            </button>
            <CartWidget itemCount={itemCount} />
        </div>
    );
};

export default Cart;