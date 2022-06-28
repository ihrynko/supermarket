 export interface IPerson {
    name: string;
   
}
​
export enum Producer {
    Flagman = 'Flagman Seafood',
    Umanpivo = 'Umanpivo',
    SvoyaLiniya = 'Svoya Liniya'
}
​
export type TProduct = {
    name: string,
    price: number,
    producer: Producer,
}
​
export const seaProduct: TProduct = {
    name: 'Dorada',
    price: 35,
    producer: Producer.Flagman
}
export const beerProduct: TProduct = {
    name: 'Waissburg',
    price: 20,
    producer: Producer.Umanpivo
}
export const icecreamProduct: TProduct = {
    name: 'Morozyvo',
    price: 10,
    producer: Producer.SvoyaLiniya
}

