import "./Kaomoji.css";

function Kaomoji({ transition }) {
	return (
		<div id="transition" className={transition ? "visible" : ""}>
			<div>
				<p id="kaomoji">ᕕ( ᐛ )ᕗ</p>
			</div>
		</div>
	);
}
export default Kaomoji;
