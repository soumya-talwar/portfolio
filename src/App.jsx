import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Canvas from "./components/Canvas/Canvas";
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
			<Kaomoji transition={transition} />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							dialogs={dialogs}
							setDialogs={setDialogs}
							transition={transition}
							setTransition={setTransition}
						/>
					}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/:slug" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
