import type { Fundamental } from "../interfaces/About";
import type { Value } from "../interfaces/About";
import type { ValueCardData } from "../interfaces/About";

// Solo exportamos claves o ids que se usen para renderizar
export const fundamentals = <Fundamental[]>[
    {
        id: "tab-1",
        tituloKey: "about.fundamentals.mission.title",
        encabezadoKey: "about.fundamentals.mission.header",
        contenidoKey: "about.fundamentals.mission.content",
        imagen: "/img/img-mision.webp"
    },
    {
        id: "tab-2",
        tituloKey: "about.fundamentals.vision.title",
        encabezadoKey: "about.fundamentals.vision.header",
        contenidoKey: "about.fundamentals.vision.content",
        imagen: "/img/img-vision.webp"
    },
];

export const values = <Value[]>[
    {
        tituloKey: "about.values.quality.title",
        descripcionKey: "about.values.quality.description",
    },
    {
        tituloKey: "about.values.responsibility.title",
        descripcionKey: "about.values.responsibility.description",
    },
    {
        tituloKey: "about.values.commitment.title",
        descripcionKey: "about.values.commitment.description",
    },
    {
        tituloKey: "about.values.innovation.title",
        descripcionKey: "about.values.innovation.description",
    },
    {
        tituloKey: "about.values.communication.title",
        descripcionKey: "about.values.communication.description",
    },
    {
        tituloKey: "about.values.teamwork.title",
        descripcionKey: "about.values.teamwork.description",
    },
];

export const valueCardsData: ValueCardData[] = [
    {
        descripcionKey: "about.valueCards.0.description",
        img: "/img/img-value-1.png",
    },
    {
        descripcionKey: "about.valueCards.1.description",
        img: "/img/img-value-2.png",
    },
];
