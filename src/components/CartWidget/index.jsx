// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = ({ itemCount }) => {
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