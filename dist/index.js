"use strict";
// class Student {
//     static old = 'old';
//     public name: string; 
//     protected age = 20;
// //private, така черговість
var Producer;
(function (Producer) {
    Producer["Flagman"] = "Flagman Seafood";
    Producer["Umanpivo"] = "Umanpivo";
    Producer["SvoyaLiniya"] = "Svoya Liniya";
})(Producer || (Producer = {}));
const seaProduct = {
    name: 'Dorada',
    price: 35,
    producer: Producer.Flagman
};
const beerProduct = {
    name: 'Waissburg',
    price: 20,
    producer: Producer.Umanpivo
};
const icecreamProduct = {
    name: 'Morozyvo',
    price: 10,
    producer: Producer.SvoyaLiniya
};
class Warehouse {
    constructor() {
        this._products = [
            seaProduct, beerProduct, icecreamProduct
        ];
    }
    get products() {
        return this._products;
    }
}
class Cashier {
    constructor(name, presence) {
        this.name = name;
        this.presence = presence;
        this._cashRegister = 0;
    }
    takeMoneyFromCustomer(customer, amount) {
        customer.giveMoney(amount);
        this._cashRegister += amount;
    }
    get cashRegister() {
        return this._cashRegister;
    }
    topUpTheAccount() {
        this._cashRegister = 0;
    }
}
class WarehouseManager {
    constructor(name, presence) {
        this.name = name;
        this.presence = presence;
        this.products = [];
    }
    getProducts(warehouse) {
        this.products = warehouse.products;
    }
    get productsList() {
        return this.products;
    }
}
class Supermarket {
    constructor() {
        this.productList = [];
        this.balance = 0;
        this.isOpen = false;
        this.customerbasket = [];
    }
    open(cashier, warehousemanager) {
        if (cashier.presence === false || warehousemanager.presence === false) {
            throw new Error('Sorry, the supermarket is closed');
        }
        this.isOpen = true;
        this.productList = warehousemanager.productsList;
    }
    sell(goods, customer, cashier) {
        if (this.isOpen) {
            if (goods === []) {
                throw new Error('Choose some goods');
            }
            Object.entries(this.productList).forEach(([_, product]) => {
                goods.forEach((good) => {
                    if (product.name === good) {
                        this.customerbasket.push(product);
                        const idx = this.productList.findIndex(element => element === product);
                        this.productList.splice(idx, 1);
                    }
                });
            });
            const totalSum = this.customerbasket.reduce((sum, good) => {
                return sum + good.price;
            }, 0);
            cashier.takeMoneyFromCustomer(customer, totalSum);
            this.giveCustomerProduct(customer, this.customerbasket);
        }
    }
    giveCustomerProduct(customer, products) {
        customer.takeProducts(products);
        this.customerbasket = [];
    }
    closeSupermarket(cashier) {
        this.balance = cashier.cashRegister;
        cashier.topUpTheAccount();
        this.isOpen = false;
    }
}
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.products = [];
    }
    giveMoney(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            throw new Error('Not enough money');
        }
    }
    takeProducts(products = []) {
        this.products = products;
    }
}
const cashier = new Cashier('Maria', true);
const warehouseManager = new WarehouseManager('Bohdan', true);
const customer = new Customer('Anton', 1000);
const customer1 = new Customer('Anna', 1000);
const warehouse = new Warehouse();
const market = new Supermarket();
warehouseManager.getProducts(warehouse);
market.open(cashier, warehouseManager);
market.sell(['Waissburg'], customer, cashier);
market.sell(['Waissburg', 'Dorada'], customer1, cashier);
market.closeSupermarket(cashier);
console.log(customer);
console.log(customer1);
console.log(market);
