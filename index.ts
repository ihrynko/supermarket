
// class Student {
//     static old = 'old';
//     public name: string; 
//     protected age = 20;
// //private, така черговість
    
//     readonly CONST_New = 'This is constant';

    
//     constructor(name: string) {
//         this.name = name;
//     }

//     //getters and setters

//     sayName() {
// console.log(this.name);
        
//     }
//     static oldNmae() {
// console.log(this.old);
        
//     }
// }

// const foo = new Student('name 1');

// class AStudent {
//     static old = 'old';
//     protected age = 20;
//     private _name: string; 
    
    
//     readonly CONST_New = 'This is constant';

    
//     constructor(name: string) {
//         this._name = name;
//     }

    

//     get name() {
//         return this._name;
//     }

//     sayName() {
// console.log(this.name);
        
//     }
//     static oldNmae() {
// console.log(this.old);
        
//     }
// }

// const foo1 = new AStudent('name 1');

// interface IPerson {
//     name: string;
//     age: number;
//     nikName: string;

// }

// type TPerson = {
//     name: string,
//     age: number
// }

// class Student implements IPerson {
//     name: string;
//     age: number;
//     nikName: string = 'None';


//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     getData(): TPerson{
//         return this;
//     }

// }
interface IPerson {
    name: string;
   
}
​
enum Producer {
    Flagman = 'Flagman Seafood',
    Umanpivo = 'Umanpivo',
    SvoyaLiniya = 'Svoya Liniya'
}
​
type TProduct = {
    name: string,
    price: number,
    producer: Producer,
}
​
const seaProduct: TProduct = {
    name: 'Dorada',
    price: 35,
    producer: Producer.Flagman
}
const beerProduct: TProduct = {
    name: 'Waissburg',
    price: 20,
    producer: Producer.Umanpivo
}
const icecreamProduct: TProduct = {
    name: 'Morozyvo',
    price: 10,
    producer: Producer.SvoyaLiniya
}

class Warehouse {
    private _products: TProduct[] = [
        seaProduct, beerProduct, icecreamProduct
    ];
        get products() {
        return this._products;
    }
}
​
class Cashier implements IPerson {
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
class WarehouseManager implements IPerson {
    protected products:TProduct[] = [];

   constructor(public name: string, public presence: boolean){}
     getProducts( warehouse: Warehouse) {
       this.products = warehouse.products
    }
     get productsList() {
     return this.products;
}
}
 

class Supermarket {

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
    
    

class Customer implements IPerson {
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

const cashier = new Cashier('Maria', true);
const warehouseManager = new WarehouseManager('Bohdan', true);
const customer = new Customer('Anton', 1000);
const customer1 = new Customer('Anna',1000);
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