interface Todo {
	title: string;
	description: string;
	completed: boolean;
}
type MyOmit<T, U extends string | number | symbol> = {
	[K in keyof T as K extends U ? never : K]: T[K];
};

// title extends "description" | "title" ? never :title
type TodoPreview = MyOmit<Todo, "description" | "title">;
type TodoPreview1 = Omit<Todo, "description" | "title">;

const todo: TodoPreview = {
	completed: false,
};

type Getters<T> = {
	[K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type getter = Getters<Todo>;

type CreateMutable<Type> = {
	readonly [Property in keyof Type]: Type[Property];
};

type MappedTypeWithNewProperties<Type> = {
	[Properties in keyof Type as "NewKeyType"]: Type[Properties];
};

type F = MappedTypeWithNewProperties<Todo>;

export {};
