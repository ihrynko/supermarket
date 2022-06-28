import { TProduct, seaProduct, beerProduct, icecreamProduct} from '../types/types';

export class Warehouse {
    private _products: TProduct[] = [
        seaProduct, beerProduct, icecreamProduct
    ];
        get products() {
        return this._products;
    }
}