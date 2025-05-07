export interface Servicio {
    nombre: string,
    route: string,
    icono: string,
    servicios: Servicios[],
}

export interface Servicios {
    nombre: string,
    icono: string,
    route: string,
}

export interface CarruselItem {
    img: string;
}  
