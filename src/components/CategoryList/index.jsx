// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import { getProducts } from "../../mockData"
import "./style.css"
import { CategoryItem } from "../CategoryItem"

const categories = [
	{
		id: 1,
		name: "Masculino",
		image:
			"https://viacomit.net/wp-content/uploads/2018/08/introducing-the-vans-ultrarange-3d-03.jpg",
		link: "/masculino",
		category: "Masculino"
	},
	{
		id: 2,
		name: "Feminino",
		image: "https://namedsox.com/images/home/trainer/kids-trainer-4.jpg",
		link: "/feminino",
		category: "Feminino"
	},
	{
		id: 3,
		name: "Infantil",
		image:
			"https://p0.pikist.com/photos/60/498/bebe-tennis-slipper-baby-chi-boy-children-s-shoe-daughter-child-thumbnail.jpg",
		link: "/infantil",
		category: "Infantil"
	},
	{
		id: 4,
		name: "Sale",
		image:
			"https://domf5oio6qrcr.cloudfront.net/medialibrary/12620/conversions/8562059d-9ab8-4815-83d2-c90cbb0ebdd3-thumb.jpg",
		link: "/sale",
		category: "Sale"
	}
]

export const CategoryList = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts()
			.then((data) => {
				setProducts(data)
			})
			.catch((error) => {
				console.error("Erro ao carregar produtos:", error)
			})
	}, [])

	return (
		<div className="category-list">
			{categories.map((category) => (
				<div key={category.id} className="category-section">
					<h2>{category.name}</h2>
					<div className="category-items">
						{products
							.filter((product) => product.category === category.category) // Filtra os produtos por categoria
							.map((product) => (
								<CategoryItem key={product.id} item={product} />
							))}
					</div>
				</div>
			))}
		</div>
	)
}
