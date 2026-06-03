import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Canvas from "./components/Canvas/Canvas";

function App() {
	const [dialogs, setDialogs] = useState({
		projects: false,
		experiments: false,
		compliment: false,
	});
	return (
		<>
			<Canvas />
			<Routes>
				<Route
					path="/"
					element={<Home dialogs={dialogs} setDialogs={setDialogs} />}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/:slug" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
