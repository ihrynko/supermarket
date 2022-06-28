import { IPerson, TProduct } from '../types/types';


export class Customer implements IPerson {
    private products: TProduct[] = [];
    constructor(public name: string, private balance: number) { }
    public giveMoney(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            throw new Error('Not enough money')
        }
    }
    public takeProducts( products: TProduct[] = []) {
        this.products = products;
    }
}