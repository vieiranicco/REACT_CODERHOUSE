// eslint-disable-next-line no-unused-vars
import React from 'react';
import  { Item } from '../Item';

export const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};
