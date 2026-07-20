import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Canvas from "./components/Canvas/Canvas";
import Menu from "./components/Menu/Menu";
import Dialog from "./components/Dialog/Dialog";
import Captcha from "./components/Captcha/Captcha";
import Kaomoji from "./components/Kaomoji/Kaomoji";
import dino from "./assets/images/misc/dino.png";

function App() {
	const [desktop, setDesktop] = useState(window.innerWidth >= 1024);
	useEffect(() => {
		const resize = () => {
			setDesktop(window.innerWidth >= 1024);
		};
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, []);
	if (!desktop) {
		return (
			<div id="mobile">
				<h2>Tiny screen detected!</h2>
				<p>
					Please visit on a desktop. My projects need a little more leg room.
				</p>
				<img src={dino}></img>
			</div>
		);
	}
	const [dialogs, setDialogs] = useState({
		projects: false,
		experiments: false,
		compliment: false,
	});
	const [transition, setTransition] = useState(false);
	const location = useLocation();
	const showTrail = location.pathname !== "/contact";
	return (
		<>
			<Canvas showTrail={showTrail} />
			<Menu dialogs={dialogs} setDialogs={setDialogs} />
			<Dialog
				dialogs={dialogs}
				setDialogs={setDialogs}
				type="projects"
				setTransition={setTransition}
			/>
			<Dialog
				dialogs={dialogs}
				setDialogs={setDialogs}
				type="experiments"
				setTransition={setTransition}
			/>
			<Captcha
				dialogs={dialogs}
				setDialogs={setDialogs}
				type="compliment"
				setTransition={setTransition}
			/>
			<Kaomoji transition={transition} />
			<Routes>
				<Route path="/" element={<Home setTransition={setTransition} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/:slug" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
