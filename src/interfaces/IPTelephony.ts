export interface IPTelephonyData {
    telfunctions: TelephonyFunction[];
    benfits: BenfitsIPTelephony[];
    solutions: Solution[];
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