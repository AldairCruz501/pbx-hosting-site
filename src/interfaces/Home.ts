export interface Card {
    imagen: string;
    tituloKey: string;
    descripcionKey: string;
}

export interface Service {
    num: string;
    nombreKey: string;
    descripcionKey: string,
    url: string,
}

export interface Reseller {
    tituloKey: string;
    descripcionKey: string;
    icono: string;
}

export interface HomeData {
    cards: Card[];
    services: Service[];
    resellers: Reseller[];
}