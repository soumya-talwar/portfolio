import p5 from "p5";
import { useRef, useEffect } from "react";

function Doodle({ drawRef, setInstruction }) {
	const doodleRef = useRef(null);
	useEffect(() => {
		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(drawRef.current.clientWidth, window.innerHeight);
				p.background(255);
			};
			p.mouseDragged = () => {
				p.fill(0);
				p.strokeWeight(8);
				p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
			};
			p.mousePressed = () => {
				setInstruction((prev) => ({ ...prev, visible: false }));
			};
		};
		const instance = new p5(sketch, doodleRef.current);
		return () => {
			instance.remove();
		};
	}, []);
	return <div ref={doodleRef}></div>;
}

export default Doodle;
