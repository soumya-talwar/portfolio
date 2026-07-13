import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Tooltip.css";

function Tooltip({ tooltip, setTooltip, setInstruction, sketchRef }) {
	const [send, setSend] = useState("email it to me (ෆ˙ᵕ˙ෆ)");
	const [progress, setProgress] = useState(false);
	return (
		<div
			id="tooltip"
			className={tooltip.visible ? "" : "invisible"}
			style={{ top: tooltip.top, left: tooltip.left }}>
			<div
				id="send"
				onClick={async () => {
					const canvas = sketchRef.current;
					setSend("sending...(ง˘▽˘)ว");
					setProgress(true);
					const temp = canvas.createGraphics(
						300,
						(canvas.height * 300) / canvas.width,
					);
					temp.background(255);
					temp.image(canvas, 0, 0, 300, (canvas.height * 300) / canvas.width);
					const doodle = temp.canvas.toDataURL("image/jpeg", 0.5);
					console.log(doodle);
					await emailjs.send(
						"service_skuixqg",
						"template_h1lyhmj",
						{
							doodle: doodle,
						},
						"36uTK-X3XMDFUCENb",
					);
				}}>
				<div
					id="overlay"
					style={{ width: progress ? `100%` : 0 }}
					onTransitionEnd={() => {
						setSend("sent! (ദ്ദി ˙ᗜ˙)");
						setTimeout(() => {
							setTooltip((prev) => ({ ...prev, visible: false }));
							setSend("email it to me (ෆ˙ᵕ˙ෆ)");
							setProgress(false);
						}, 1000);
					}}></div>
				<span>{send}</span>
			</div>
			<div
				id="erase"
				onClick={() => {
					sketchRef.current.background(255);
					setInstruction((prev) => ({ ...prev, visible: true }));
					setTooltip((prev) => ({ ...prev, visible: false }));
				}}>
				<span>erase ( ˶°ㅁ°) !!</span>
			</div>
		</div>
	);
}

export default Tooltip;
