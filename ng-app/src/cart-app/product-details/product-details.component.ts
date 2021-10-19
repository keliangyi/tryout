import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    product: Product | undefined;

    constructor(private route: ActivatedRoute, private serverCart: CartService) { }

    ngOnInit() {
        const params = this.route.snapshot.paramMap;
        const pidFromRouter = Number(params.get('id'));
        this.product = products.find((f) => f.id === pidFromRouter);
    }

    addToCart(p: Product) {
        this.serverCart.addToCart(p)
        window.alert('Your product has been added to the cart!');
    }
}
