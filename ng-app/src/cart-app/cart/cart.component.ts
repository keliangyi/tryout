import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
	constructor(private cartServer: CartService, private form: FormBuilder) { }

	items = this.cartServer.items
	checkoutForm = this.form.group({
		name: "",
		address: ''
	})

	ngOnInit(): void {

	}

	onSubmit(): void {
		this.items = this.cartServer.clearCart()
		console.log('Your order has been submitted', this.checkoutForm.value);
		this.checkoutForm.reset()
	}

}
