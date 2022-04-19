const fn: (a: number, b: number) => number = (a, b) => a + b;

enum Status {
	success,
	error,
	warnning,
}

const s: Status = Status.error;

const c = 1 === Status.error;
export {};
