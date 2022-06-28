import { Warehouse } from './classes/Warehouse';
import { Cashier } from './classes/Cashier';
import { Customer } from './classes/Customer';
import { WarehouseManager } from './classes/WarehouseManager';
import { Supermarket } from './classes/Supermarket';

const cashier = new Cashier('Maria', true);
const warehouseManager = new WarehouseManager('Bohdan', true);
const customer = new Customer('Anton', 1000);
const customer1 = new Customer('Anna',2000);
const warehouse = new Warehouse();
const market = new Supermarket();
warehouseManager.getProducts(warehouse);
market.open(cashier, warehouseManager);
market.sell(['Waissburg'], customer, cashier);
market.sell([ 'Dorada'], customer1, cashier);
market.closeSupermarket(cashier);
