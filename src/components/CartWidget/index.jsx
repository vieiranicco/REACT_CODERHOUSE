import { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../context/CartContext" // Importe o contexto

export const CartWidget = () => {
	const { cart } = useContext(CartContext) // Use o contexto

	// Calcula o total de itens no carrinho
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

	return (
		<div
			style={{
				fontSize: "1.5rem",
				color: "white",
				marginLeft: "15px",
				position: "relative"
			}}
		>
			<FaShoppingCart />
			{totalItems > 0 && (
				<span
					style={{
						position: "absolute",
						top: "-10px",
						right: "-10px",
						backgroundColor: "red",
						color: "white",
						borderRadius: "50%",
						padding: "2px 6px",
						fontSize: "0.8rem"
					}}
				>
					{totalItems}
				</span>
			)}
		</div>
	)
}
