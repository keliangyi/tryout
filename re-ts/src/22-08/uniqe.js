const uniqe = (input) => {
	const res = []

	input.forEach((i) => {
		if (!res.includes(i)) {
			if (typeof i === 'object') {
				// if(res.some(s=>Object.keys(i)))
			} else {
				res.push(i)
			}
		}
	})

	return res
}
const data = [1, 'a', { b: 2 }, { c: 3 }, { b: 2 }, '1', 'a']

console.log('uniqe()', uniqe(data))
