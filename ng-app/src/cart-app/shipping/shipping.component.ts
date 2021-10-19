import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-shipping',
	templateUrl: './shipping.component.html',
	styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {

	shippingCosts = this.cartService.getShippingPrices()

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		// this.s.forEach(i => {
		// 	console.log(i, 'aaa');

		// })
	}

}
