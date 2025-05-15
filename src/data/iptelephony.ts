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
    ],
    purposes: [
        {
            titulo: "Identificador de llamadas",
            descripcion: "Te permitirá saber quién está al otro lado antes de contestar.",
            icono: "bi bi-telephone-inbound"
        },
        {
            titulo: "Multiplataforma",
            descripcion: "Nuestra línea virtual es compatible con una variedad de dispositivos y sistemas operativos.",
            icono: "bi bi-collection"
        },
        {
            titulo: "Contactos",
            descripcion: "Mantenga su lista de contactos organizada y accesible desde cualquier lugar.",
            icono: "bi bi-person-lines-fill"
        },
        {
            titulo: "Buzón de voz",
            descripcion: "Con nuestro eficiente buzón de voz, puede recibir y revisar mensajes incluso cuando no puede contestar el teléfono.",
            icono: "bi bi-voicemail"
        },
        {
            titulo: "Utilice su número",
            descripcion: "Mantenga su número actual al portarlo con nosotros.",
            icono: "bi bi-123"
        },
        {
            titulo: "Flexibilidad",
            descripcion: "Nuestra línea virtual le brinda la libertad de adaptar su experiencia según sus necesidades.",
            icono: "bi bi-arrows-move"
        },
    ],
    qualities: [
        {
            img: "/img/img-channel.png",
            titulo: "Canales de entrada",
            descrpition: "Es por donde se puede emitir una llamada, un canal permite una llamada, si tu número virtual cuenta con 2 canales entrada únicamente podrá recibir hasta 2 llamadas de manera simultánea y las siguientes serán rebotadas."
        },
        {
            img: "/img/img-voip-cash.png",
            titulo: "Saldo Voip",
            descrpition: "Crédito virtual que permite realizar llamadas por internet a diferentes destinos, tantos fijos como móviles, a un excelente costo a diferencia de otras compañías de telefonía análoga."
        },
    ],
    prices: [
        {
            insignia: "2 Canales",
            titulo: "Línea Telefónica",
            precio: "840",
            pais: "México",
            imgPais: "/img/mexico.png"
        },
        {
            insignia: "10 Canales",
            titulo: "Línea Telefónica",
            precio: "1,680",
            pais: "México",
            imgPais: "/img/mexico.png"
        },
        {
            insignia: "2 Canales",
            titulo: "Línea Telefónica",
            precio: "1,056",
            pais: "Estados Unidos",
            imgPais: "/img/estados-unidos.png"
        },
    ],
    offices: [
        {
            titulo: "Fácil de Usar",
            descripcion: "Los servicios VoIP suelen ser fáciles de configurar y poner en marcha. No requieren hardware costoso ni instalaciones complicadas, lo que simplifica la implementación para los usuarios de home office.",
            icono: "bi bi-ui-checks"
        },
                {
            titulo: "Flexible",
            descripcion: "Puedes mantener tu número de teléfono de la oficina sin importar dónde te encuentres. Esto te permite trabajar desde diferentes lugares sin cambiar tu número de contacto.",
            icono: "bi bi-sliders"
        },
                {
            titulo: "Movilidad",
            descripcion: "Puedes acceder a tu línea telefónica desde cualquier lugar con conexión a Internet, lo que te permite mantenerte conectado y productivo incluso cuando estás fuera de tu oficina en casa.",
            icono: "bi bi-phone-flip"
        },
                {
            titulo: "Ahorro",
            descripcion: "Los servicios de VoIP suelen ser más económicos que las líneas telefónicas tradicionales, lo que puede resultar en un ahorro significativo para ti como empleado que trabaja desde casa.",
            icono: "bi bi-piggy-bank"
        },
                {
            titulo: "Escalable",
            descripcion: "Los servicios VoIP son altamente escalables, lo que significa que puedes agregar o quitar líneas telefónicas según las necesidades de tu empresa.",
            icono: "bi bi-arrows-fullscreen"
        },
                {
            titulo: "Compatible",
            descripcion: "Los servicios VoIP suelen ser compatibles con una amplia variedad de dispositivos, como teléfonos IP, computadoras, tablets y smartphones.",
            icono: "bi bi-puzzle"
        },
    ],
    points: [
        {
            icono: "bi bi-soundwave",
            titulo: "Voz",
            subtitulo: "Profesional"
        },
        {
            icono: "bi bi-compass",
            titulo: "Navegación",
            subtitulo: "Simplificada"
        },
        {
            icono: "bi bi-clock",
            titulo: "Ahorro de",
            subtitulo: "Tiempo"
        },
        {
            icono: "bi bi-gear",
            titulo: "Personalizado",
            subtitulo: ""
        },
                {
            icono: "bi bi-lightning-charge",
            titulo: "Información",
            subtitulo: "inmediata"
        },
        {
            icono: "bi bi-pencil-square",
            titulo: "Modificable",
            subtitulo: ""
        },
    ],
    pricesVoip: [
        {
            titulo: "Plan Residencial",
            precio: "150",
            características: [
                "1 Línea Telefónica de México",
                "Hasta 1200 Min de México",
            ]
        },
                {
            titulo: "Pa'quete Comuniques",
            precio: "250",
            características: [
                "1 Línea Telefónica de México",
                "IVR Personalizado",
                "5 Extensiones internas",
                "Llamadas ilimitadas* de México",
            ]
        },
    ],
    pymes: [
        {
            titulo: "Conmutador en la Nube",
            descripcion: "Facilita la gestión de comunicaciones entre departamentos dentro de la empresa.",
            icono: "bi-cloud-check"
        },
        {
            titulo: "Bolsa de minutos",
            descripcion: "Plan de Minutos para empezar a realizar llamadas a teléfonos fijos y celulares.",
            icono: "bi-stopwatch"
        },
        {
            titulo: "Microsite",
            descripcion: "Un sitio web es la mejor manera de tener una mejor presentación hacia tus clientes.",
            icono: "bi-window"
        },
        {
            titulo: "Líneas Telefónicas",
            descripcion: "Las líneas telefónicas son una opción económica y flexible que permite mejorar la imagen de la empresa.",
            icono: "bi-telephone-forward"
        },
        {
            titulo: "Equipo Telefónico",
            descripcion: "Incluye funciones para silenciar, transferir y realizar llamadas con hasta 3 personas en simultaneo.",
            icono: "bi-phone"
        },
        {
            titulo: "SMS Marketing",
            descripcion: "Envía miles de sms en sólo 3 pasos, perfectos para campañas y recordatorios para los clientes.",
            icono: "bi-chat-dots"
        },
    ],
    pricesPyme: [
        {
            titulo: "PLUS 2",
            precio: "6,999",
            características: [
                "Conmutador PBX30",
                "4 Líneas Telefónicas 5 Canales c/u",
                "Fijos: 1500 Minutos",
                "Celular: 4500 Minutos",
                "3 Teléfonos IP GXP1610",
                "1 Teléfono IP GXP2160",
            ],
            mensualidad: "2,280"
        },
        {
            titulo: "PLUS 3",
            precio: "13,156",
            características: [
                "Conmutador PBX60",
                "6 Líneas Telefónicas 10 Canales c/u",
                "Fijos: 3000 Minutos",
                "Celular: 7000 Minutos",
                "9 Teléfonos IP GXP1610",
                "1 Teléfono IP GXP2160",
            ],
            mensualidad: "4,099"
        },
        {
            titulo: "ULTIMATE PRO",
            precio: "6,760",
            características: [
                "Conmutador PBX30",
                "3 Líneas Telefónicas 10 Canales c/u",
                "Fijos: 1500 Minutos",
                "Celular: 4500 Minutos",
                "4 Teléfonos IP GXP1610",
                "Microsite",
                "Hosting + Dominio",
                "500 SMS Masivos",
            ],
            mensualidad: "2,598"
        },
    ],
}
 
 