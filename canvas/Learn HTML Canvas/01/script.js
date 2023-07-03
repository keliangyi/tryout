const getimgBtn = document.querySelector("#getimg");
const image1 = document.querySelector("#img1");

const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

getimgBtn.addEventListener("change", function (e) {
	const img = e.target.files[0];

	const fileReader = new FileReader();

	fileReader.onload = function (res) {
		image1.src = res.target.result;

		setTimeout(() => {
			start();
		}, 500);
	};
	fileReader.readAsDataURL(img);
});

function start() {
	const effect = new Effect(canvas.width, canvas.height);
	effect.init(ctx);
	// animate();

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		effect.draw(ctx);
		effect.update();

		window.requestAnimationFrame(animate);
	}
}

class Particle {
	constructor(effect) {
		this.effect = effect;
		this.size = 10;
		this.x = (effect.width - this.size) * Math.random();
		this.y = (effect.height - this.size) * Math.random();
		this.vx = Math.random() * 3 - 1;
		this.vy = Math.random() * 3 - 1;
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.size, this.size);
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
	}
}

class Effect {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		this.particleArray = [];
		this.image = document.querySelector("#img1");
		this.centerX = this.width * 0.5;
		this.centerY = this.height * 0.5;
		this.x = this.centerX - this.image.width * 0.5;
		this.y = this.centerY - this.image.height * 0.5;
	}

	init(context) {
		context.drawImage(this.image, this.x, this.y);
		const pixels = context.getImageData(0, 0, this.width, this.height);
		console.log("pixs", pixels);
	}

	draw(context) {
		this.particleArray.forEach((p) => {
			p.draw(context);
		});
	}

	update() {
		this.particleArray.forEach((p) => {
			p.update();
		});
	}
}

window.addEventListener("load", function () {});
