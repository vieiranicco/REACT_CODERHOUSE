import { useContext, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../context/CartContext" // Importe o contexto do carrinho
import "./style.css"

export const Cart = () => {
	const { cart, removeFromCart } = useContext(CartContext) // Use o contexto do carrinho
	const [isCartOpen, setIsCartOpen] = useState(false) // Estado para controlar a visibilidade do painel

	// Calcula o total de itens no carrinho
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

	// Calcula o valor total do carrinho
	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen) // Alterna a visibilidade do painel
	}

	return (
		<div style={{ position: "relative" }}>
			{/* Ícone do Carrinho com Contador */}
			<div className="cart-icon" onClick={toggleCart}>
				<FaShoppingCart style={{ fontSize: "1.5rem", color: "white" }} />
				{totalItems > 0 && <span className="cart-count">{totalItems}</span>}
			</div>

			{/* Painel do Carrinho (aparece apenas quando isCartOpen é true) */}
			{isCartOpen && (
				<div className="cart-panel">
					<h3>Carrinho de Compras</h3>
					{cart.length === 0 ? (
						<p>O carrinho está vazio.</p>
					) : (
						<>
							<ul>
								{cart.map((item) => (
									<li key={item.id} className="cart-item">
										<img src={item.pictureUrl} alt={item.title} />
										<div>
											<h4>{item.title}</h4>
											<p>Quantidade: {item.quantity}</p>
											<p>Preço: R$ {(item.price * item.quantity).toFixed(2)}</p>
											<button onClick={() => removeFromCart(item.id)}>
												Remover
											</button>
										</div>
									</li>
								))}
							</ul>
							<div className="cart-total">
								<p>Total: R$ {totalPrice.toFixed(2)}</p>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	)
}
