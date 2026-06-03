export default class TextScramble {
	constructor(element) {
		this.element = element;
		this.chars = "!<>-_\\/[]{}—=+*^?#________";
		this.update = this.update.bind(this);
	}

	next(text2) {
		let text1 = this.element.innerText;
		let length = Math.max(text1.length, text2.length);
		let promise = new Promise((resolve) => (this.resolve = resolve));
		this.queue = [];
		for (let i = 0; i < length; i++) {
			let from = text1[i] || "";
			let to = text2[i] || "";
			let start = Math.floor(Math.random() * 40);
			let end = start + Math.floor(Math.random() * 40);
			this.queue.push({
				from,
				to,
				start,
				end,
			});
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}

	update() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.chars[Math.floor(Math.random() * this.chars.length)];
					this.queue[i].char = char;
				}
				output += `<span class="dud">${char}</span>`;
			} else output += from;
		}
		this.element.innerHTML = output;
		if (complete === this.queue.length) this.resolve();
		else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}
}
