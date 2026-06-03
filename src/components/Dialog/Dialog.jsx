import Folder from "../Folder/Folder";
import { projects } from "../../data/projects";
import { experiments } from "../../data/experiments";
import "./Dialog.css";

function Dialog({ dialogs, setDialogs, type }) {
	const data = {
		projects,
		experiments,
	};
	return (
		<>
			<div className={`screen ${dialogs[type] ? "visible" : ""}`}></div>
			<div
				id="projects"
				className={`wrapper ${dialogs[type] ? "visible" : ""}`}>
				<div className="dialog">
					<div className="close">
						<h3
							onClick={() =>
								setDialogs({
									projects: false,
									experiments: false,
									compliment: false,
								})
							}>
							x
						</h3>
					</div>
					<div className="folders">
						{data[type].map((work) => (
							<Folder
								key={work.id}
								route={work.url}
								title={work.title}
								hook={work.hook}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Dialog;
