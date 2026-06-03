import { useRef, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Slide from "../../components/Slide/Slide";
import TextScramble from "../../utils/TextScramble";
import { projects } from "../../data/projects";
import "./Home.css";
import "../components/Slide/Slide.css";

function Home() {
	const roleRef = useRef(null);
	useEffect(() => {
		const phrases = ["PROGRAMMER", "DESIGNER", "WRITER", "ARTIST"];
		const text = new TextScramble(roleRef.current);
		let counter = 0;
		function start() {
			text.next(phrases[counter]).then(() => {
				setTimeout(start, 800);
			});
			counter = (counter + 1) % phrases.length;
		}
		start();
	}, []);
	return (
		<>
			<Menu />
			<div id="snapper">
				<div>
					<div className="snap">
						<h1>
							<span id="name">SOUMYA TALWAR</span> [{" "}
							<span id="role" ref={roleRef}>
								PROGRAMMER
							</span>{" "}
							]
						</h1>
						<h2 id="bio">
							&gt; TALKING PLANTS, GAMES TO WIN A DATE WITH ME, AUTOMATED
							WHATSAPP COMPLIMENTS—I BUILD{" "}
							<span className="striked">OVERENGINEEREED</span> JAVASCRIPT JOKES.{" "}
							<span id="scroll">
								SCROLL DOWN<span id="cursor">_</span>
							</span>
						</h2>
					</div>
					{projects.map((project) => (
						<Slide
							key={project.route}
							title={project.title}
							year={project.year}
							hook={project.hook}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Home;
