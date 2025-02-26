// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Item = ({ product }) => {
    return (
        <div className="item">
            <img src={product.pictureUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
        </div>
    );
};

