import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					SHOeCOMMERCE
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Produtos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contato
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
