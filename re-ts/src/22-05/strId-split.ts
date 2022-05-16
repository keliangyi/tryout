const Query = '/api/get/user?name=maomao&age=15&id=1'
//@ts-expect-error
type GetSplit<S extends string, U extends string, I extends number> = String.Split<S, U>[I]

type Entity =
	| {
			name: string
	  }
	| {
			age: number
	  }

type ObjWithId<T extends object> = T & {
	[K in string & keyof T as `${K}Id`]: string
}

type Res = ObjWithId<{
	name: string
}>

const d1: Res = {
	name: 'd',
	nameId: 'dd',
}
export {}
