const title = `<h1>Blob 对象</h1>`
document.body.innerHTML = title

const str = 'hello world'
const textBlob = new Blob([str], {
	type: 'text/plain',
})

const htmlBlob = new Blob([title], {
	type: 'text/html',
})

console.log(htmlBlob)

htmlBlob.text().then((r) => {
	console.log(r)
})

const a = document.createElement('a')

a.setAttribute('download', 'test.html')
a.href = URL.createObjectURL(htmlBlob)
a.innerText = '点击下载html'
document.body.append(a)

const input = document.createElement('input')
input.setAttribute('type', 'file')

const loading = document.createElement('a')
loading.style.display = 'none'
loading.innerText = '加载中...'
document.body.append(loading)

input.onchange = function (e: Event) {
	const file = (e.target as HTMLInputElement).files?.[0]!
	const isVideo = file.type.startsWith('video')
	const preview = isVideo ? document.createElement('video') : new Image()
	if (isVideo) {
		preview.setAttribute('controls', 'true')
		preview.setAttribute('autoplay', 'true')
		preview.setAttribute('width', '400px')
	}
	document.body.append(preview)
	// 同步
	// const url = URL.createObjectURL(file) // blob:http://0.0.0.0:9000/69a760b0-f524-43d1-a7e5-e5409d08a4fb
	// img.src = url

	// 异步
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)
	fileReader.onload = function () {
		preview.src = fileReader.result as string // data:image/jpeg;base64,
	}

	preview.oncanplay = function () {
		// only video&audio
		loading.style.display = 'none'
	}

	fileReader.onloadstart = function () {
		loading.style.display = 'block'
	}
	fileReader.onloadend = function () {}
}
document.body.append(input)

export {}
