import type { IPTelephonyData } from "../interfaces/IPTelephony";

export const ipTelephonyData: IPTelephonyData = {
    telfunctions: [
        {
            titulo: "Ahorro en llamadas",
            img: "/img/ahorro-llamadas.svg"
        },
        {
            titulo: "Sin Límites Geográficos",
            img: "/img/llamadas-internacionales.svg"
        },
        {
            titulo: "Soporte 24/7",
            img: "/img/soporte-24horas.svg"
        },
        {
            titulo: "Portabilidad",
            img: "/img/portabilidad-numeros-virtuales.svg"
        },
        {
            titulo: "Calidad de llamadas HD",
            img: "/img/llamadas-altacalidad.svg"
        },
        {
            titulo: "Línea 800 TollFree",
            img: "/img/linea-800.svg"
        },
    ],
    benfits: [
        {
            titulo: "Conexión estable",
            descripcion: "Comunicación clara y sin interrupciones."
        },
        {
            titulo: "Múltiples líneas",
            descripcion: "Excelente gestión de llamadas simúltaneas."
        },
        {
            titulo: "Funciones Avanzadas",
            descripcion: "Mejoran la eficiencia y productividad."
        },
        {
            titulo: "Escalabilidad",
            descripcion: "Adaptable al crecimiento de la empresa para cubrir las necesidades."
        },
    ],
    solutions:[
        {
            titulo: "Callcenter",
            img: "bi bi-headset"
        },
        {
            titulo: "Salud",
            img: "bi bi-heart-pulse"
        },
        {
            titulo: "Hoteles",
            img: "bi bi-building"
        },
        {
            titulo: "eCommerce",
            img: "bi bi-cart"
        },
        {
            titulo: "Escuelas",
            img: "bi bi-backpack2"
        },
        {
            titulo: "Bienes Raíces",
            img: "bi bi-buildings"
        },
        {
            titulo: "Transporte",
            img: "bi bi-truck"
        },
        {
            titulo: "Seguros",
            img: "bi bi-postcard-heart"
        },
        {
            titulo: "Restaurantes",
            img: "bi bi-cup"
        },
        {
            titulo: "Gobierno",
            img: "bi bi-bank2"
        },
        {
            titulo: "Finanzas",
            img: "bi bi-cash-coin"
        },
        {
            titulo: "ContactCenter",
            img: "bi bi-headphones"
        },
    ],
    advantages: [
        {
            titulo: "Gran Ahorro",
            descripción: "Gracias a la transmisión de datos por internet permite ser mas económica a la telefonía tradicional."
        },
        {
            titulo: "Geolocalización",
            descripción: "Permiten que las llamadas se enruten a través de diferentes ubicaciones geográficas, lo que puede ser beneficioso para empresas con presencia internacional."
        },
        {
            titulo: "Compatibilidad",
            descripción: "Facilita la integración con PBX IP y otros equipos de telecomunicaciones modernos."
        },
    ],
    steps: [
        {
            id: 1,
            icono: "bi bi-telephone",
            titulo: "1. Inicio de la llamada",
            contenido: "Un usuario inicia una llamada desde un teléfono conectado a una centralita telefónica (PBX).",
            color: "one"
        },
        {
            id: 2,
            icono: "bi bi-diagram-3",
            titulo: "2. Enrutamiento Interno",
            contenido: "Si la llamada es interna (por ejemplo, entre dos extensiones de la misma empresa), la PBX enruta la llamada directamente al teléfono de destino.",
            color: "two"
        },
        {
            id: 3,
            icono: "bi bi-arrow-up-right",
            titulo: "3. Enrutamiento Externo",
            contenido: "Si la llamada es externa, la PBX decide cómo manejarla. Puede enviarla a través de una troncal SIP o hacia la red PSTN, dependiendo de la configuración",
            color: "three"
        },
        {
            id: 4,
            icono: "bi bi-telephone-fill",
            titulo: "4. Comunicación con la PSTN",
            contenido: "Si la llamada se dirige a un número fuera de la red de la empresa, la PBX la envía a la red PSTN, la cual conecta la llamada al destinatario final.",
            color: "four"
        },
        {
            id: 5,
            icono: "bi bi-cloud-arrow-up",
            titulo: "5. Comunicación a través de la Troncal SIP",
            contenido: "Si la llamada se realiza a través de una troncal SIP, la PBX utiliza esta conexión basada en SIP para enrutar la llamada hacia la red VoIP o Internet.",
            color: "five"
        },
        {
            id: 6,
            icono: "bi bi-cloud-check",
            titulo: "6. Conexión a la Red PSTN",
            contenido: "Si la llamada se origina en una red VoIP y se dirige a un número en la red PSTN, la troncal SIP actúa como un puente, conectando la llamada a través de la PSTN.",
            color: "one"
        },
        {
            id: 7,
            icono: "bi bi-cloud",
            titulo: "7. Comunicación a través de la Internet",
            contenido: "En el caso de llamadas VoIP puras, la comunicación se realiza a través de la infraestructura de Internet utilizando protocolos VoIP como SIP.",
            color: "two"
        },
        {
            id: 8,
            icono: "bi bi-chat",
            titulo: "8. Conversación y Finalización",
            contenido: "Una vez que la llamada se ha enrutado adecuadamente, los usuarios pueden hablar entre sí. La conversación continúa hasta que uno de ellos cuelga, momento en el cual la llamada se finaliza.",
            color: "three"
        },
    ]
}