import type { Servicio } from "../interfaces/Header";

export const servicios: Servicio[] = [
	{
		nombre: "Telefonía IP",
		route: "/",
		icono: 'bi-telephone',
		servicios: [
			{
				nombre: "Telefonía IP",
				route: "/",
				icono: "bi-telephone"
			},
			{
				nombre: "Línea Sip",
				route: "/",
				icono: "bi-voicemail"
			},
			{
				nombre: "Líneas Telefónicas",
				route: "/",
				icono: "bi-phone"
			},
			{
				nombre: "Paquetes VoIP",
				route: "/",
				icono: "bi-box-seam"
			},
			{
				nombre: "Paquetes PyME",
				route: "/",
				icono: "bi-building"
			},
		],
	},
	{
		nombre: "Conmutador en la nube",
		route: "/",
		servicios: [],
		icono: "bi-cloud"
	},
	{
		nombre: "Hosting",
		route: "",
		icono: "bi-hdd-network",
		servicios: [
			{
				nombre: "Planes Hosting",
				route: "/",
				icono: "bi-server"
			},
			{
				nombre: "Diseño Web",
				route: "/",
				icono: "bi-code-slash"
			},
		],
	},
	{
		nombre: "Dominio",
		route: "/",
		icono: "bi-globe",
		servicios: [
			{
				nombre: "Comprar Dominio",
				route: "/",
				icono: "bi-cart"
			},
			{
				nombre: "Transferir Dominio",
				route: "/",
				icono: "bi-arrow-left-right"
			},
		],
	},
	{
		nombre: "Servidores",
		route: "/",
		icono: "bi-cpu",
		servicios: [
			{
				nombre: "VPS",
				route: "/",
				icono: "bi-box"
			},
			{
				nombre: "VPN",
				route: "/",
				icono: "bi-shield-lock"
			},
			{
				nombre: "Dedicados",
				route: "/",
				icono: "bi-pc-display-horizontal"
			},
		],
	},
	{
		nombre: "SMS Marketing",
		route: "/",
		icono: "bi-chat-dots",
		servicios: [],
	},
	{
		nombre: "Callcenter",
		route: "/",
		icono: "bi-headset",
		servicios: [
			{
				nombre: "PBX Dialer",
				route: "/",
				icono: "bi-telephone-forward"
			},
			{
				nombre: "Paquetes Callcenter",
				route: "/",
				icono: "bi-box2"
			},
			{
				nombre: "Software Kollob",
				route: "/",
				icono: "bi-window"
			},
		],
	},
]