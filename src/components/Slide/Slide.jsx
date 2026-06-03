import "./Slide.css";

function Slide({ index, title, year, hook, slideRefs }) {
	return (
		<div
			className="snap"
			data-index={index}
			ref={(slide) => (slideRefs.current[index] = slide)}>
			<h1>
				{title.toUpperCase()} — {year}
			</h1>
			<h2>{hook.toUpperCase()}</h2>
		</div>
	);
}

export default Slide;
