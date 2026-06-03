import "./Slide.css";

function Slide({ title, year, hook }) {
	console.log(title);
	return (
		<div className="snap">
			<h1>
				{title.toUpperCase()} — {year}
			</h1>
			<h2>{hook.toUpperCase()}</h2>
		</div>
	);
}

export default Slide;
