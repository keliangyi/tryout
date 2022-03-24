const req = (target: any, key: string, desc: PropertyDescriptor): any => {
	var method = desc.value;
	desc.value = function (...arg: any[]) {
		const ctx = {
			req: 45,
		};
		method.apply(this, [ctx, ...arg]);
	};
	return desc;
};

export default class Router {
	@req
	async list(ctx: any) {
		console.log("ctxxxx", ctx);

		return "ca";
	}
}
