const fn = (v: boolean) => {
	if (v) {
		return 1;
	}
	return 2;
};

type MyReturnType<T extends Function> = T extends (...a: any) => infer R
	? R
	: never;

type a = MyReturnType<typeof fn>;

export {};
