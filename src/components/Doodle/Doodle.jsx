import p5 from "p5";
import { useState, useRef, useEffect } from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./Doodle.css";

function Doodle() {
	const drawRef = useRef(null);
	const sketchRef = useRef(null);
	const [instruction, setInstruction] = useState({
		text: "send me a doodle",
		visible: true,
	});
	const [tooltip, setTooltip] = useState({
		visible: false,
		top: 0,
		left: 0,
	});
	const draggedRef = useRef(false);
	useEffect(() => {
		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(drawRef.current.clientWidth, window.innerHeight);
				p.background(255);
			};
			p.mousePressed = () => {
				setInstruction({ ...instruction, visible: false });
			};
			p.mouseDragged = () => {
				setTooltip({ ...tooltip, visible: false });
				p.fill(0);
				p.strokeWeight(8);
				p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
				draggedRef.current = true;
			};
			p.mouseReleased = () => {
				if (draggedRef.current)
					setTooltip({
						visible: true,
						top: p.winMouseY + 10,
						left: p.winMouseX + 10,
					});
				draggedRef.current = false;
			};
		};
		sketchRef.current = new p5(sketch, drawRef.current);
		return () => {
			sketchRef.current.remove();
		};
	}, []);
	return (
		<div
			id="draw"
			ref={drawRef}
			onMouseEnter={() =>
				setInstruction({ ...instruction, text: "drag the mouse to draw" })
			}
			onMouseLeave={() =>
				setInstruction({ ...instruction, text: "send me a doodle" })
			}>
			<small
				id="instruction"
				className={instruction.visible ? "" : "invisible"}>
				{instruction.text}
			</small>
			<Tooltip
				tooltip={tooltip}
				setTooltip={setTooltip}
				setInstruction={setInstruction}
				sketchRef={sketchRef}
			/>
		</div>
	);
}

export default Doodle;
