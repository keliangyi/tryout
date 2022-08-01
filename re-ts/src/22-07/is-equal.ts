function isEqual(arr1: Array<any>, arr2: Array<any>): boolean {
	if (arr1.length !== arr2.length) {
		return false
	}

	for (let index = 0; index < arr1.length; index++) {
		const element = arr1[index]
		if (Array.isArray(element) && Array.isArray(arr2[index])) {
			if (!isEqual(element, arr2[index])) {
				return false
			}
		} else {
			if (element !== arr2[index]) {
				return false
			}
		}
	}
	return true
}

// JSON.stringify(arr1) === JSON.stringify(arr2)

console.log('isEqual([1],[2])', isEqual([16, 2, ['a', ['1', 1]]], [1, 2, ['a', ['1', 1]]]))
