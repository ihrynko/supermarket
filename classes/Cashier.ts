import { IPerson } from '../types/types';
import { Customer } from './Customer';

export class Cashier implements IPerson {
    private _cashRegister = 0;
     constructor(public name: string, public presence: boolean){}
    public takeMoneyFromCustomer(customer: Customer, amount: number) {
        customer.giveMoney(amount);
        this._cashRegister += amount;
    }
    get cashRegister() {
        return this._cashRegister;
    }
    public topUpTheAccount() {
    this._cashRegister = 0;
   }

}
​