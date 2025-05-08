export interface IPTelephonyData {
    telfunctions: TelephonyFunction[];
    benfits: BenfitsIPTelephony[];
    solutions: Solution[];
    advantages: Advantage[];
    steps: Step[];
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