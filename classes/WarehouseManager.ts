import {TProduct, IPerson } from '../types/types';
import { Warehouse } from './Warehouse';

export class WarehouseManager implements IPerson {
    protected products:TProduct[] = [];

   constructor(public name: string, public presence: boolean){}
     getProducts( warehouse: Warehouse) {
       this.products = warehouse.products
    }
     get productsList() {
     return this.products;
}
}