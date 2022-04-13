const setDefaultValue = <T extends Object>(
	obj: T,
	defaultValue: any = void 0
) =>
	new Proxy(obj, {
		get: (target: T, prop: Extract<keyof T, string>) =>
			target[prop] ?? defaultValue,
	});

declare global {
	interface Array<T> {
		last: T;
		remove: (item: T) => T;
	}
}

// Object.defineProperty(Array.prototype, "last", {
// 	get: function () {
// 		return this[this.length - 1];
// 	},
// });
// Array.prototype.remove = function (i) {
// 	return;
// };

const ar = ["a", "c", "df"];
const a = new Proxy(ar, {
	get(target: any, prop: any) {
		if (prop === "last") {
			return 123;
		}
		return target[prop];
	},
});
// console.log(ar[1], 123);
const r = setDefaultValue(ar, "sbv");
console.log(a.last);

export {};
