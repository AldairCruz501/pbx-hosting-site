export interface IPTelephonyData {
    telfunctions: TelephonyFunction[];
    benfits: BenfitsIPTelephony[];
    solutions: Solution[];
    advantages: Advantage[];
    steps: Step[];
    purposes: Purpose[];
    qualities: Qualitie[];
    prices: Price[];
    offices: Office[];
    points: IVR[];
    pricesVoip: PriceVoip[];
    pymes: Pyme[];
    pricesPyme: PricePyme[];
}

export interface TelephonyFunction {
    titulo: string,
    img: string,
}

export interface BenfitsIPTelephony {
    titulo: string,
    descripcion: string,
}

export interface Solution {
    titulo: string,
    img: string,
}

export interface Advantage {
    titulo: string,
    descripción: string,
}

export interface Step {
    id: number,
    icono: string,
    titulo: string,
    contenido: string,
    color: string,
}

export interface Purpose {
    titulo: string,
    descripcion: string,
    icono: string,
}

export interface Qualitie {
    img: string,
    titulo: string,
    descrpition: string,
}

export interface Price {
    insignia: string,
    titulo: string,
    precio: string,
    pais: string,
    imgPais: string,
}

export interface Office {
    titulo: string,
    descripcion: string,
    icono: string,
}

export interface IVR {
    icono: string,
    titulo: string,
    subtitulo: string,
}

export interface PriceVoip {
    titulo: string,
    precio: string,
    características: string[]
}

export interface Pyme {
    titulo: string,
    descripcion: string,
    icono: string,
}

export interface PricePyme {
    titulo: string,
    precio: string,
    mensualidad: string,
    características: string[]
}