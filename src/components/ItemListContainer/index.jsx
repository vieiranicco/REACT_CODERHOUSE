import './style.css'; 
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getProducts } from "../../mockData"; // Importe o mock de dados
import { ItemList } from  '../ItemList';

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula a chamada assíncrona
        getProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar produtos:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {loading ? (
                <p>Carregando produtos...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};
