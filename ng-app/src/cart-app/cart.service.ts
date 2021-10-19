import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {

    items: Product[] = [];
    constructor(private http: HttpClient) { }

    getShippingPrices() {
        const r = this.http.get<{ type: string; price: number }[]>('/assets/shipping.json')
        return r
    }

    addToCart(product: Product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}