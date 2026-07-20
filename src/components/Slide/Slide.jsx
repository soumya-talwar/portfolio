import usePageTransition from "../../hooks/usePageTransition";
import "./Slide.css";

function Slide({ index, title, year, route, hook, slideRefs, setTransition }) {
	const pageTransition = usePageTransition(setTransition);
	return (
		<div
			className="snap"
			data-index={index}
			ref={(slide) => (slideRefs.current[index] = slide)}>
			<h1>
				<span
					className="url"
					onClick={() => {
						pageTransition(`projects/${route}`);
					}}>
					{title.toUpperCase()}
				</span>{" "}
				— {year}
			</h1>
			<h2>{hook.toUpperCase()}</h2>
		</div>
	);
}

export default Slide;
