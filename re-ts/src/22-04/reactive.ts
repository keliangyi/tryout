function reactive<T>(v: T) {
	return new Proxy(
		{ value: v },
		{
			set(t, p, v) {
				t.value = v
				return true
			},
		}
	)
}

let name = reactive('maomao')

name.value = '1'
name.value = '2'
name.value = 'val'

console.log('dd', name)

export {}
