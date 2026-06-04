import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ dialogs, setDialogs }) {
	return (
		<div id="menu">
			<Link id="home" to="/">
				soumya talwar
			</Link>
			<button
				type="button"
				onClick={() => setDialogs({ ...dialogs, projects: true })}>
				i made these, be impressed
			</button>
			/
			<button
				type="button"
				onClick={() => setDialogs({ ...dialogs, experiments: true })}>
				some experiments
			</button>
			/<button type="button">let's be friends</button>
		</div>
	);
}

export default Menu;
