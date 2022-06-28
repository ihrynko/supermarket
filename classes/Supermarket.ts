import { TProduct } from '../types/types';
import { Cashier } from './Cashier';
import { WarehouseManager } from './WarehouseManager';
import { Customer } from './Customer';


export class Supermarket {

    public productList: TProduct[] = [];
    private balance = 0;
    public isOpen = false;
    public customerbasket: TProduct[] =[];

    public open(cashier: Cashier, warehousemanager: WarehouseManager) {
        if (cashier.presence === false || warehousemanager.presence === false) {
            throw new Error('Sorry, the supermarket is closed')
        }
        this.isOpen = true;
        this.productList = warehousemanager.productsList;
    }


    public sell(goods: string[], customer: Customer, cashier: Cashier) {
        if (this.isOpen) {
            if (goods === []) {
               throw new Error('Choose some goods')
            }
            Object.entries(this.productList).forEach(([_, product]) => {
                goods.forEach((good) => {
                    if (product.name === good) {
                        this.customerbasket.push(product);
                        const idx = this.productList.findIndex(element => element === product);
                        this.productList.splice(idx, 1);
                    } 
                });
            })
        const totalSum = this.customerbasket.reduce((sum, good) => {
        return sum + good.price;
        }, 0);
            cashier.takeMoneyFromCustomer(customer, totalSum);
            this.giveCustomerProduct(customer, this.customerbasket);
        }
    }
    protected giveCustomerProduct(customer: Customer, products: TProduct[]) {
        customer.takeProducts(products);
        this.customerbasket = [];
    }
    public closeSupermarket(cashier: Cashier) {
        this.balance = cashier.cashRegister; 
       cashier.topUpTheAccount();
        this.isOpen = false;
    }
}
   