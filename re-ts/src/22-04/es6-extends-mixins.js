class Serialization {
	constructor() {
		console.log("Serialization construtor ~~~~~~", this.stringfy);
		if (typeof this.stringfy !== "function") {
			throw new ReferenceError("should define stringify.");
		}
	}
}

class Point extends Serialization {
	constructor(x, y) {
		console.log("Point Constructor");
		super(); // 调用父构造器
		this.x = x;
		this.y = y;
	}

	stringfy() {
		return `<Point x="${this.x}, y=${this.y}">`;
	}
}

class Point3D extends Point {
	constructor(x, y, z) {
		super(x, y); // 调用父构造器
		this.z = z;
	}

	stringfy() {
		return `<Point3D x="${this.x}, y=${this.y}, z=${this.z}">`;
	}
}

const c = new Serialization();
p = new Point(4, 5);
console.log(p.stringfy());
console.log("=====================");
p3d = new Point3D(7, 8, 9);
console.log(p3d.stringfy());
