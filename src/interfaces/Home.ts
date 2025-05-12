export interface Card {
    imagen: string;
    titulo: string;
    descripcion: string;
}

export interface Service {
    num: string;
    nombre: string;
    descripcion: string,
    url: string,
}

export interface Reseller {
    titulo: string;
    descripcion: string;
    icono: string;
}

export interface HomeData {
    cards: Card[];
    services: Service[];
    resellers: Reseller[];
}