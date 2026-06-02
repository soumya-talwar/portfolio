import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
	return (
		<div id="menu">
			<Link id="home" to="/">
				soumya talwar
			</Link>
			<button id="works">i made these, be impressed</button>/
			<button id="games">some experiments</button>/
			<button id="contact">let's be friends</button>
		</div>
	);
}

export default Menu;
