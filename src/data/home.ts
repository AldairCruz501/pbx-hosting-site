import type { HomeData } from "../interfaces/Home";

export const homeData: HomeData = {
	cards: [
		{
			imagen: "/img/card-1.webp",
			titulo: "Telefonía IP",
			descripcion: "Proporciona una conexión confiable para facilitar la comunicación organización."
		},
		{
			imagen: "/img/card-2.webp",
			titulo: "SMS Marketing",
			descripcion: "¡La mejor herramienta para llegar a tus clientes! Envía Recordatorios, Cupones y mucho más."
		},
		{
			imagen: "/img/card-3.webp",
			titulo: "Conmutador en la nube",
			descripcion: "Descubre la solución definitiva para tus necesidades de comunicación empresarial."
		},
	],
	services: [
		{
			nombre: "Telefonía IP",
			descripcion: "Proporciona una conexión confiable para facilitar la comunicación organización.",
			num: "1"
		},
		{
			nombre: "SMS Marketing",
			descripcion: "¡La mejor herramienta para llegar a tus clientes! Envía Recordatorios, Cupones y mucho más.",
			num: "2"
		},
		{
			nombre: "Conmutador en la nube",
			descripcion: "Descubre la solución definitiva para tus necesidades de comunicación empresarial.",
			num: "3"
		},
		{
			nombre: "Servidores",
			descripcion: "Obtén el control total sobre tu entorno virtual con nuestros servidores VPS personalizables.",
			num: "4"
		},
		{
			nombre: "CallCenter",
			descripcion: "Telefonía para Callcenters con una excelente tarifa para mejorar tu contactación día a día.",
			num: "5"
		},
	],
	resellers: [
		{
			titulo: "Genera Ganancias",
			descripcion: "Tu colocas el precio.",
			icono: "bi bi-cash-coin"
		},
		{
			titulo: "Panel Revendedor",
			descripcion: "Aplica saldo, asigna números, crea planes.",
			icono: "bi bi-display"
		},
		{
			titulo: "Mínima inversión",
			descripcion: "Inicia con $1000MXN+IVA.",
			icono: "bi bi-currency-exchange"
		},
	]
};