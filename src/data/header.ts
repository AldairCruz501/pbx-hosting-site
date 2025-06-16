import type { Servicio, CarruselItem } from "../interfaces/Header";

export const servicios: Servicio[] = [
	{
		nameKey: "header.services.ipTelephony.title",
		route: "/telefonia-ip",
		icon: 'bi-telephone',
		services: [
			{
				nameKey: "header.services.ipTelephony.submenu.ipTelephony",
				route: "/telefonia-ip",
				icon: "bi-telephone"
			},
			{
				nameKey: "header.services.ipTelephony.submenu.sipLine",
				route: "/telefonia-ip/linea-sip",
				icon: "bi-voicemail"
			},
			{
				nameKey: "header.services.ipTelephony.submenu.telephoneLine",
				route: "/telefonia-ip/lineas-telefonicas",
				icon: "bi-phone"
			},
			{
				nameKey: "header.services.ipTelephony.submenu.voipPackages",
				route: "/telefonia-ip/paquetes-voip",
				icon: "bi-box-seam"
			},
			{
				nameKey: "header.services.ipTelephony.submenu.smePackages",
				route: "/telefonia-ip/paquetes-pyme",
				icon: "bi-building"
			},
		],
	},
	{
		nameKey: "header.services.switch.title",
		route: "/conmutador-en-la-nube",
		icon: "bi-cloud",
		services: [
			{
				nameKey: "header.services.switch.submenu.cloudswitches",
				icon: "bi-cloud",
				route: "/conmutador-en-la-nube"
			}
		],
	},
	{
		nameKey: "header.services.hosting.title",
		route: "/",
		icon: "bi-hdd-network",
		services: [
			{
				nameKey: "header.services.hosting.submenu.hostingPlans",
				route: "/",
				icon: "bi-server"
			},
			{
				nameKey: "header.services.hosting.submenu.webDesign",
				route: "/",
				icon: "bi-code-slash"
			},
		],
	},
	{
		nameKey: "header.services.domain.title",
		route: "/dominios",
		icon: "bi-globe",
		services: [
			{
				nameKey: "header.services.domain.submenu.buyDomain",
				route: "/dominios",
				icon: "bi-cart"
			},
			{
				nameKey: "header.services.domain.submenu.transferDomain",
				route: "/dominios",
				icon: "bi-arrow-left-right"
			},
		],
	},
	{
		nameKey: "header.services.servers.title",
		route: "/",
		icon: "bi-cpu",
		services: [
			{
				nameKey: "header.services.servers.submenu.vps",
				route: "/",
				icon: "bi-box"
			},
			{
				nameKey: "header.services.servers.submenu.vpn",
				route: "/",
				icon: "bi-shield-lock"
			},
			{
				nameKey: "header.services.servers.submenu.dedicated",
				route: "/",
				icon: "bi-pc-display-horizontal"
			},
		],
	},
	{
		nameKey: "header.services.sms.title",
		route: "/",
		icon: "bi-chat-dots",
		services: [
			{
				nameKey: "header.services.sms.submenu.smsMarketing",
				icon: "bi-chat-dots",
				route: "/"
			}
		],
	},
	{
		nameKey: "header.services.callcenter.title",
		route: "/",
		icon: "bi-headset",
		services: [
			{
				nameKey: "header.services.callcenter.submenu.pbxDialer",
				route: "/",
				icon: "bi-telephone-forward"
			},
			{
				nameKey: "header.services.callcenter.submenu.callPackages",
				route: "/",
				icon: "bi-box2"
			},
			{
				nameKey: "header.services.callcenter.submenu.softwareKollob",
				route: "/",
				icon: "bi-window"
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