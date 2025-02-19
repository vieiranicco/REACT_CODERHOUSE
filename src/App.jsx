import { Body } from "./components/Body"
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer";

export const App = () => {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting="Bem-Vindo à nossa loja!" />
			<Body />
		</>
	)
}

