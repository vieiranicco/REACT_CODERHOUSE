import "./style.css"

export function NavBar() {
	return (
		<nav style={styles.navbar}>
			<h1 style={styles.brand}>
				<a href="#">SHOeCOMMERCE</a>
			</h1>
			<ul style={styles.menu}>
				<li>
					<a href="#">Início</a>
				</li>
				<li>
					<a href="#">Produtos</a>
				</li>
				<li>
					<a href="#">Contato</a>
				</li>
			</ul>
		</nav>
	)
}

const styles = {
	navbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "15px 20px",
		backgroundColor: "#ff94c6",
		color: "#000"
	},
	brand: {
		margin: 0
	},
	menu: {
		listStyle: "none",
		display: "flex",
		gap: "15px",
		padding: 0,
		margin: 0
	}
}
