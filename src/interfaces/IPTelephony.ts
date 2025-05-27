export interface IPTelephonyData {
    telfunctions: TelephonyFunction[];
    benfits: BenfitsIPTelephony[];
    tabs: TabIPTelephony[];
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
    tituloKey: string,
    img: string,
}

export interface BenfitsIPTelephony {
    tituloKey: string,
    descripcionKey: string,
}

export interface TabIPTelephony {
    tituloKey: string,
    icono: string,
}

export interface Solution {
    tituloKey: string,
    img: string,
}

export interface Advantage {
    tituloKey: string,
    descripcionKey: string,
}

export interface Step {
    id: number,
    icono: string,
    tituloKey: string,
    contenidoKey: string,
    color: string,
}

export interface Purpose {
    tituloKey: string,
    descripcionKey: string,
    icono: string,
}

export interface Qualitie {
    img: string,
    tituloKey: string,
    descrpitionKey: string,
}

export interface Price {
    insigniaKey: string,
    tituloKey: string,
    precio: string,
    paisKey: string,
    imgPais: string,
}

export interface Office {
    tituloKey: string,
    descripcionKey: string,
    icono: string,
}

export interface IVR {
    icono: string,
    tituloKey: string,
    subtituloKey: string,
}

export interface PriceVoip {
    tituloKey: string,
    precio: string,
    característicasKey: string[]
}

export interface Pyme {
    tituloKey: string,
    descripcionKey: string,
    icono: string,
}

export interface PricePyme {
    tituloKey: string,
    precio: string,
    mensualidad: string,
    caracteristicasKey: string[]
}