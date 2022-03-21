import {
	AfterViewInit,
	Component,
	Inject,
	Injectable,
	Injector,
	OnInit,
} from "@angular/core";

import { InjectionToken } from "@angular/core";

const PRODUCT_NAME_TOKEN = new InjectionToken<string>("PRODUCT_NAME");
const PRODUCT_COLOR_TOKEN = new InjectionToken<string>("PRODUCT_COLOR");

@Injectable()
class Product {
	constructor(@Inject(PRODUCT_NAME_TOKEN) private name: string) {
		console.log("Product:", this.name);
	}
}

@Injectable()
class Order {
	constructor(private product: Product) {
		console.log("Order:", this.product);
	}
}

@Component({
	selector: "app-injector",
	templateUrl: "./injector.component.html",
	styleUrls: ["./injector.component.less"],
})
export class InjectorComponent implements OnInit, AfterViewInit {
	public afterVI = 1;

	constructor() {}

	ngOnInit(): void {
		const injector = Injector.create({
			providers: [
				{
					provide: Product,
					useFactory() {
						return new Product("sb");
					},
					// useClass: Product,
				},
				{
					provide: Order,
					useClass: Order,
					deps: [Product],
				},
			],
		});
		const p = injector.get(Product);
		console.log("p", p);
		this.afterVI = 2;
	}

	ngAfterViewInit(): void {
		this.afterVI = 3;
	}
}
