(function () {
	chrome.runtime.onMessage.addListener((obj, sender, res) => {
		console.log("obj", obj, sender, res);
		setTimeout(() => {
			newVideoLoaded();
		}, 500);
	});

	const sleep = (s) => {
		return new Promise((r) => {
			setTimeout(() => {
				r();
			}, s * 1000);
		});
	};

	const newVideoLoaded = async () => {
		window.stop();

		console.log("tpc_conten");

		const tpc_content_imgs = document.querySelectorAll(".tpc_content img");
		console.log(tpc_content_imgs, "tpc_content_imgs");
		window.stop();
		const imgs = Array.from(tpc_content_imgs);
		imgs.forEach((img) => {
			img.dataset.source = img.src;
			img.removeAttribute("src");
		});
		// console.log("Array.from(imgs)", Array.from(imgs));
		for (const i of imgs) {
			try {
				const img = await loadImage(i.dataset.source);
				i.parentNode.replaceChild(img, i);
			} catch (error) {
				console.log("error", error, i.dataset.source);
				continue;
			}
		}
		console.log(" 加载完了~~~~ ");
	};
	const loaded = new Map();
	const loadImage = (src) => {
		return new Promise((resolve, reject) => {
			const r = loaded.get(src);

			if (r) {
				console.log("cache", r);
				resolve(r);
				return;
			}
			const img = new Image();
			console.log("开始加载： ", src);
			img.src = src;
			img.onload = () => {
				console.log("loaded ");
				loaded.set(src, img);
				resolve(img);
			};
			img.onerror = reject;
		});
	};

	newVideoLoaded();
})();
