class Storage {
	public static local: Storage;
	// public static instence: Storage = new Storage();

	private constructor() {
		// 第一步、设为私有的
		console.log("red");
	}

	public static getInstance() {
		// 第二步、创建唯一的一个实例，按需创建
		// 也可以：public static instence: Storage = new Storage();
		if (!this.local) {
			this.local = new Storage();
		}
		return this.local;
	}

	public getItem(k: string) {
		const v = localStorage.getItem(k);
		return v ? JSON.parse(v) : null;
	}

	public setItem(k: string, v: any) {
		localStorage.setItem(k, JSON.stringify(v));
	}
}

const st = Storage.getInstance();

console.log(st);
console.log(Storage.local);

export default Storage;
