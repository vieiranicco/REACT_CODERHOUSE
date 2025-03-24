// eslint-disable-next-line no-unused-vars
import React from "react"
import { CartProvider } from "./components/context/CartProvider"
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Masculino } from "./components/Pages/Masculino"
import { Feminino } from "./components/Pages/Feminino"
import { Infantil } from "./components/Pages/Infantil"
import { Sale } from "./components/Pages/Sale"

export const App = () => {
	return (
		<CartProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer greeting="Bem-Vindo à nossa loja!" />}
					/>
					<Route path="/masculino" element={<Masculino />} />
					<Route path="/feminino" element={<Feminino />} />
					<Route path="/infantil" element={<Infantil />} />
					<Route path="/sale" element={<Sale />} />
				</Routes>
			</Router>
		</CartProvider>
	)
}
