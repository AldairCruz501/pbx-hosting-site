import type { Servicio, CarruselItem } from "../interfaces/Header";

export const servicios: Servicio[] = [
	{
		nombre: "Telefonía IP",
		route: "/telefonia-ip",
		icono: 'bi-telephone',
		servicios: [
			{
				nombre: "Telefonía IP",
				route: "/telefonia-ip",
				icono: "bi-telephone"
			},
			{
				nombre: "Línea Sip",
				route: "/telefonia-ip/linea-sip",
				icono: "bi-voicemail"
			},
			{
				nombre: "Líneas Telefónicas",
				route: "/telefonia-ip/lineas-telefonicas",
				icono: "bi-phone"
			},
			{
				nombre: "Paquetes VoIP",
				route: "/telefonia-ip/paquetes-voip",
				icono: "bi-box-seam"
			},
			{
				nombre: "Paquetes PyME",
				route: "/telefonia-ip/paquetes-pyme",
				icono: "bi-building"
			},
		],
	},
	{
		nombre: "Conmutador en la nube",
		route: "/",
		servicios: [
			{
				nombre: "Conmutadores en la nube",
				icono: "bi-cloud",
				route: "/"
			}
		],
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
		route: "/dominios",
		icono: "bi-globe",
		servicios: [
			{
				nombre: "Comprar Dominio",
				route: "/dominios",
				icono: "bi-cart"
			},
			{
				nombre: "Transferir Dominio",
				route: "/dominios",
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
		nombre: "SMS",
		route: "/",
		icono: "bi-chat-dots",
		servicios: [
			{
				nombre: "SMS Marketing",
				icono: "bi-chat-dots",
				route: "/"
			}
		],
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

export const carruselItems: CarruselItem[] = [
	{
	  img: '/img/publicidad/ACD_ALOJAIG_SABÍASQUÉ_DOMINIOS_14feb.png',
	},
	{
	  img: '/img/publicidad/CJ_PBXFB_INICIACALLCENTER_14jun.jpg',
	},
	{
	  img: '/img/publicidad/CJ_PBXFB_TUNEGOCIOENLÍNEA_12may.jpg',
	},
	{
	  img: '/img/publicidad/CJ_PROMO_RESELLER.jpg',
	},
	{
	  img: '/img/publicidad/CJ_TELIP_PAQUETECOMUNIQUES_31mar.jpg',
	},
	{
	  img: '/img/publicidad/CJ_TELIP_REVENDEDOR_2jul.jpg',
	},
	{
	  img: '/img/publicidad/CJ_TELIP_SOLUCIONESCOMPLETAS_7may.jpg',
	},
	{
	  img: '/img/publicidad/CJ_TELIP_VENTAJASTELIP_16may.jpg',
	},
	{
	  img: '/img/publicidad/D_RESUBIDO_10ene.jpg',
	},
	{
	  img: '/img/publicidad/JB_PBXFB_SMSMASIVOS_1ene.png',
	},
	{
	  img: '/img/publicidad/JB_TELIP_PLARESIDENCIAL_21mar.png',
	},
	{
	  img: '/img/publicidad/MG_PBXFB_DOMINIOIDEAL_1mar.png',
	},
  ];