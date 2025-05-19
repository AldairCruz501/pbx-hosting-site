export interface Servicio {
    nameKey: string,
    route: string,
    icon: string,
    services: Servicios[],
}

export interface Servicios {
    nameKey: string,
    icon: string,
    route: string,
}

export interface CarruselItem {
    img: string;
}  
