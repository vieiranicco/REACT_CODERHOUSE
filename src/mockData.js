// mockData.js
const products = [
	{
		id: 1,
		title: "Tênis Puma RBD Game Low BDP",
		description: "Tênis confortável para o dia a dia.",
		price: 239.99,
		pictureUrl:
			"https://static.netshoes.com.br/produtos/tenis-puma-rbd-game-low-bdp-unissex/20/2I3-5480-120/2I3-5480-120_zoom1.jpg?ts=1723210726&ims=1088x",
		category: "Masculino"
	},
	{
		id: 2,
		title: "Tênis Carina Street BDP",
		description: "Tênis elegante para mulheres.",
		price: 299.99,
		pictureUrl:
			"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394296/10/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
		category: "Masculino"
	},
	{
		id: 3,
		title: "Tênis Puma X Sega Suede Sonic TD Infantil",
		description: "Tênis divertido para crianças.",
		price: 189.99,
		pictureUrl:
			"https://magicfeet.vtexassets.com/arquivos/ids/178421-800-auto?v=637268099051300000&width=800&height=auto&aspect=true",
		category: "Infantil"
	},

	{
		id: 4,
		title: "Tênis Slip-On Superstar",
		description: "Ícone das quadras de basquete desde seu lançamento em 1969",
		price: 189.99,
		pictureUrl:
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fc29731133d4002be2dab59002210e7_9366/Tenis_Slip-On_Superstar_Preto_EW2053.jpg",
		category: "Feminino"
	},

	{
		id: 5,
		title: "Tênis Forum Low CL",
		description: "Versatilidade e conforto com muito DNA esportivo",
		price: 799.99,
		pictureUrl:
			"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d1e528aac6c4bc4b530393ea1aa84cb_9366/Tenis_Forum_Low_CL_Verde_JR8305_01_00_standard.jpg",
		category: "Sale"
	}
]

// Função que simula uma chamada assíncrona
export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products)
		}, 100) // Resolve após 2 segundos
	})
}
