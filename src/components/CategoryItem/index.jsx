// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./style.css"

export const CategoryItem = ({ item }) => {
	const { addToCart } = useContext(CartContext) // Use o contexto

	const handleAddToCart = () => {
		addToCart(item) // Adiciona o item ao carrinho
	}

	return (
		<div className="category-item">
			<img src={item.pictureUrl} alt={item.title} />
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<p>Preço: R$ {item.price.toFixed(2)}</p>
			<button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
		</div>
	)
}
