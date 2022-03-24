type To = { w: number; h: number };

class Chart {
	w!: number;
	h!: number;

	constructor(w: number, h: number);
	constructor(o: To);
	constructor(a: number | To, b: number = 0) {
		if (typeof a === "number") {
			this.w = a;
			this.h = b;
		} else {
			this.w = a.w;
			this.h = a.h;
		}
	}

	public getArea() {
		return this.h * this.w;
	}
}
