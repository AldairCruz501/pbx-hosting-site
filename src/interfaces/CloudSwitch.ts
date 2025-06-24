export interface CloudSwitchData {
    features: FeaturesSwitch[];
    functs: SwitchFunction[];
    functsSwitch: FunctionsSwitch[];
    monts: MonthlyPrice[];
    years: AnnualPrice[];
}

export interface FeaturesSwitch {
    tituloKey: string,
    descripcionKey: string,
    icono: string,
}

export interface SwitchFunction {
    id: string,
    icono: string,
    tituloKey: string,
    descriptionKey: string,
    color: string,
}

export interface FunctionsSwitch {
    id: string;
    tituloKey: string;
    encabezadoKey: string;
    contenidoKey: string;
    imagen: string;
    url?: string;
}

export interface MonthlyPrice {
    tituloKey: string,
    precio: string,
    caracteristicasKey: string[],
    setup: string,
    img: string,
}

export interface AnnualPrice {
    tituloKey: string,
    precio: string,
    caracteristicasKey: string[],
    setup: string,
    img: string,
}