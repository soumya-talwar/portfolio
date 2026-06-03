import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects/:slug" element={<Project />} />
		</Routes>
	);
}

export default App;
