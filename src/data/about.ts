import { ref } from "vue";
import type { Fundamental } from "../interfaces/About";
import type { Value } from "../interfaces/About";
import type { ValueCardData } from "../interfaces/About";

export const fundamentals = ref<Fundamental[]> ([
    {
        id: "tab-1",
        titulo: "Misión",
        encabezado: "Misión",
        contenido: "Somos una empresa comprometida en brindar a nuestros clientes un servicio de internet y telefonía diferenciado por su calidad, atención e innovadora tecnología en telecomunicaciones.",
        imagen: "/img/img-mision.webp"
    },
    {
        id: "tab-2",
        titulo: "Visión",
        encabezado: "Visión",
        contenido: "Ser una empresa líder, reconocida por su compromiso y transparencia, asi como por su constante actualización y diversificación tecnológica, logrando posicionarse a nivel local, estatal y nacional.",
        imagen: "/img/img-vision.webp"
    },
])

export const values = ref<Value[]> ([
   {
       titulo: "Calidad",
       descripcion: "Nos aseguramos que nuestros clientes reciban el mejor servicio con tecnologpia de la mayor calidad."
   }, 
   {
       titulo: "Responsabilidad",
       descripcion: "Cumplimos con los objetivos asumidos con los clientes."
   },
   {
       titulo: "Compromiso",
       descripcion: "Quienes somos parte, tenemos el compromiso de generar propuesta de valor para satisfacer las necesidades y de nuestros clientes."
   },
   {
       titulo: "Innovación",
       descripcion: "Buscamos tener tecnolgía vanguardista y diferenciarnos en el mercado."
   },
   {
       titulo: "Comunicación",
       descripcion: "Valoramos a las personas, escuchamos sus opiniones, reconocemos las diferencias y las tenemos en cuenta en la toma de decisiones."
   },
   {
       titulo: "Trabajo en equipo",
       descripcion: "Estamos conscientes que la suma de ideas es mucho mejor que el accionar individual."
   },
])

export const valueCardsData: ValueCardData[] = [
    {
      descripcion: 'Ofrecemos plataformas flexibles, seguras y escalables, adaptadas a las necesidades de cada cliente, desde pequeñas empresas hasta grandes corporativos. Nuestro compromiso es brindar no solo tecnología avanzada, sino también un servicio de soporte técnico cercano, confiable y enfocado en resultados sostenibles.',
      img: '/img/img-value-1.png',
    },
    {
      descripcion: 'En PBXHosting, creemos en construir alianzas estratégicas a largo plazo, ayudando a nuestros clientes a alcanzar su máximo potencial a través de soluciones de comunicación innovadoras, accesibles y de alta calidad.',
      img: '/img/img-value-2.png',
    }
  ];