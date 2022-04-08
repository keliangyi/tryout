type fn = (a: number, b: string) => void;
type s = Parameters<fn>;

type Args<T extends Function> = T extends (...a: infer P) => any ? P : never;
