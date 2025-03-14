import { useState } from "react"
import { CartContext } from "./CartContext" // Importa o contexto

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	// Função para adicionar um item ao carrinho
	const addToCart = (item) => {
		setCart((prevCart) => {
			const itemExists = prevCart.find((cartItem) => cartItem.id === item.id)
			if (itemExists) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			} else {
				return [...prevCart, { ...item, quantity: 1 }]
			}
		})
	}

	// Função para remover um item do carrinho
	const removeFromCart = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}
