import { useState, useRef, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Slide from "../../components/Slide/Slide";
import Dialog from "../../components/Dialog/Dialog";
import TextScramble from "../../utils/TextScramble";
import { projects } from "../../data/projects";
import "./Home.css";
import "../../components/Slide/Slide.css";
import Kaomoji from "../../components/Kaomoji/Kaomoji";

function Home({ dialogs, setDialogs, setTransition }) {
	const roleRef = useRef(null);
	const slideRefs = useRef([]);
	const [count, setCount] = useState(0);
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
	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting)
						setCount(Number(entry.target.dataset.index));
				});
			},
			{
				threshold: 0.5,
			},
		);
		slideRefs.current.forEach((slide) => observer.observe(slide));
		return () => observer.disconnect();
	}, []);
	return (
		<>
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
			<div id="snapper">
				<div>
					<div
						className="snap"
						data-index="0"
						ref={(slide) => (slideRefs.current[0] = slide)}>
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
					{projects.map((project, index) => (
						<Slide
							index={index + 1}
							key={project.id}
							title={project.title}
							year={project.year}
							hook={project.hook}
							slideRefs={slideRefs}
						/>
					))}
				</div>
			</div>
			<div id="pagination">
				<span id="count">
					{count > 0 ? `${count} / ${projects.length}` : ""}
				</span>
			</div>
		</>
	);
}

export default Home;
