import Menu from "../components/Menu/Menu";
import Slide from "../components/Slide/Slide";
import { projects } from "../data/projects";
import "./Home.css";
import "../components/Slide/Slide.css";

function Home() {
	console.log(projects);
	return (
		<>
			<Menu />
			<div id="snapper">
				<div>
					<div className="snap">
						<h1>
							<span id="name">SOUMYA TALWAR</span> [{" "}
							<span id="role">PROGRAMMER</span> ]
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
