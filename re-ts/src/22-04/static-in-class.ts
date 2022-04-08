/**
 * 实例方法中用this获取静态属性和方法
 * 比Point.ver()好的地方就是当类名修改后不需要修改里面的代码
 *
 */
class Point {
	static verison = "0.0.1";
	constructor(public x: number, public y: number) {}

	getVersion() {
		return (this.constructor as typeof Point).ver();
	}

	static ver() {
		return this.verison;
	}
}

const p1 = new Point(2, 2);

console.log(p1.getVersion());

export {};
