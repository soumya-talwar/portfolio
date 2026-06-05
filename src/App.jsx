import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Canvas from "./components/Canvas/Canvas";
import Menu from "./components/Menu/Menu";
import Dialog from "./components/Dialog/Dialog";
import Captcha from "./components/Captcha/Captcha";
import Kaomoji from "./components/Kaomoji/Kaomoji";

function App() {
	const [dialogs, setDialogs] = useState({
		projects: false,
		experiments: false,
		compliment: false,
	});
	const [transition, setTransition] = useState(false);
	return (
		<>
			<Canvas />
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
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/:slug" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
