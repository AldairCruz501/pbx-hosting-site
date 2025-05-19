import type { HomeData } from "../interfaces/Home";

export const homeData: HomeData = {
	cards: [
		{
			imagen: "/img/card-1.webp",
			tituloKey: "home.cards.0.title",
			descripcionKey: "home.cards.0.description"
		},
		{
			imagen: "/img/card-2.png",
			tituloKey: "home.cards.1.title",
			descripcionKey: "home.cards.1.description"
		},
		{
			imagen: "/img/card-3.webp",
			tituloKey: "home.cards.2.title",
			descripcionKey: "home.cards.2.description"
		},
	],
	services: [
		{
			nombreKey: "home.services.0.name",
			descripcionKey: "home.services.0.description",
			num: "1",
			url: "/telefonia-ip"
		},
		{
			nombreKey: "home.services.1.name",
			descripcionKey: "home.services.1.description",
			num: "2",
			url: ""
		},
		{
			nombreKey: "home.services.2.name",
			descripcionKey: "home.services.2.description",
			num: "3",
			url: ""
		},
		{
			nombreKey: "home.services.3.name",
			descripcionKey: "home.services.3.description",
			num: "4",
			url: ""
		},
		{
			nombreKey: "home.services.4.name",
			descripcionKey: "home.services.4.description",
			num: "5",
			url: ""
		},
	],
	resellers: [
		{
			tituloKey: "home.resellers.0.title",
			descripcionKey: "home.resellers.0.description",
			icono: "bi bi-cash-coin"
		},
		{
			tituloKey: "home.resellers.1.title",
			descripcionKey: "home.resellers.1.description",
			icono: "bi bi-display"
		},
		{
			tituloKey: "home.resellers.2.title",
			descripcionKey: "home.resellers.2.description",
			icono: "bi bi-currency-exchange"
		}
	]
};