import p5 from "p5";
import { useRef, useEffect } from "react";
import "./Canvas.css";

function Canvas() {
	const canvasRef = useRef(null);
	useEffect(() => {
		let x = [];
		let y = [];
		const num = 30;
		const length = 5;
		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(window.innerWidth, window.innerHeight);
				for (let i = 0; i < num; i++) {
					x[i] = 0;
					y[i] = 0;
				}
			};
			const drag = (i, xin, yin) => {
				const dx = xin - x[i];
				const dy = yin - y[i];
				const angle = p.atan2(dy, dx);
				x[i] = xin - p.cos(angle) * length;
				y[i] = yin - p.sin(angle) * length;
				p.push();
				p.translate(x[i], y[i]);
				p.rotate(angle);
				p.strokeWeight(7);
				if (i == 0 || i == num - 1) p.strokeCap(p.SQUARE);
				p.stroke(0);
				p.line(0, 0, length, 0);
				p.pop();
			};
			p.draw = () => {
				p.background(255);
				drag(0, p.mouseX, p.mouseY);
				for (let i = 0; i < x.length - 1; i++) {
					drag(i + 1, x[i], y[i]);
				}
			};
		};
		const instance = new p5(sketch, canvasRef.current);
		return () => {
			instance.remove();
		};
	}, []);
	return <div id="canvas" ref={canvasRef}></div>;
}

export default Canvas;
