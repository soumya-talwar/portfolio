import "./Tooltip.css";

function Tooltip({ tooltip, setTooltip, setInstruction, sketchRef }) {
	return (
		<div
			id="tooltip"
			className={tooltip.visible ? "" : "invisible"}
			style={{ top: tooltip.top, left: tooltip.left }}>
			<div id="send">
				<div id="overlay"></div>
				<span>email it to me (ෆ˙ᵕ˙ෆ)</span>
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
