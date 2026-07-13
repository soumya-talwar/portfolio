import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { projects } from "../../data/projects";
import "./Project.css";
const visuals = import.meta.glob("../../assets/images/**/*", {
	eager: true,
	import: "default",
});
const audio = import.meta.glob("../../assets/audio/*.{mp3,ogg}", {
	eager: true,
	import: "default",
});
import play from "../../assets/images/misc/play.png";
import pause from "../../assets/images/misc/pause.png";
import folder from "../../assets/images/misc/folder-1.png";

function Project() {
	const { slug } = useParams();
	const [voiceover, setVoiceover] = useState(false);
	const [transcript, setTranscript] = useState({
		text: "View transcript",
		visible: false,
	});
	const voiceRef = useRef(null);
	const videoRefs = useRef([]);
	const playRefs = useRef([]);
	const project = projects.find((work) => work.route === slug);
	return (
		<div id="main">
			<div id="hook">
				<h2 id="title">[ {project.title.toUpperCase()} ]</h2>
				<h3>{project.headline.toUpperCase()}</h3>
				<small id="tools">{project.tools.join(" / ")}</small>
				<small id="date">{project.date}</small>
				<div id="audio">
					<div id="playback">
						<img
							id="play"
							src={voiceover ? pause : play}
							onClick={() => {
								if (voiceover) {
									setVoiceover(false);
									voiceRef.current.pause();
								} else {
									setVoiceover(true);
									voiceRef.current.play();
								}
							}}
						/>
					</div>
					<h4>Let me explain</h4>
				</div>
				<small
					id="transcript"
					onClick={() =>
						setTranscript((prev) => ({
							text: prev.visible ? "View transcript" : "Hide transcript",
							visible: !prev.visible,
						}))
					}>
					{transcript.text}
				</small>
				<small
					id="script"
					className={transcript.visible ? "" : "invisible"}
					dangerouslySetInnerHTML={{ __html: project.transcript }}></small>
			</div>
			<div id="gallery">
				{project.gallery.map((item, index) => {
					const path = `../../assets/images/${project.route}/${index + 1}`;
					if (item.type == "image")
						return (
							<div className="image">
								<img
									key={project.route + index}
									src={visuals[`${path}.webp`]}
									className="border"
								/>
								{item.caption ? (
									<div className="caption">
										<p>{item.caption}</p>
									</div>
								) : null}
							</div>
						);
					else
						return (
							<div className="video">
								<video
									ref={(video) => (videoRefs.current[index] = video)}
									className="border"
									onEnded={() =>
										playRefs.current[index].classList.remove("invisible")
									}>
									<source
										key={project.route + index + "1"}
										src={visuals[`${path}.webm`]}
										type={"video/webm"}
									/>
									<source
										key={project.route + index + "2"}
										src={visuals[`${path}.webm`]}
										type={"video/mp4"}
									/>
								</video>
								<div
									className="playback"
									ref={(button) => (playRefs.current[index] = button)}>
									<img
										onClick={() => {
											const video = videoRefs.current[index];
											video.play();
											playRefs.current[index].classList.add("invisible");
										}}
										src={play}
									/>
								</div>
								{item.caption ? (
									<div className="caption">
										<p>{item.caption}</p>
									</div>
								) : null}
							</div>
						);
				})}
			</div>
			<div id="links">
				{project.links.map((link) => {
					return (
						<div
							className="folder"
							onClick={() =>
								window.open(link.url, "_blank", "noopener, noreferrer")
							}>
							<img src={folder} />
							<small>{link.cta}</small>
						</div>
					);
				})}
			</div>
			<audio
				ref={voiceRef}
				id="description"
				onEnded={() => setVoiceover(false)}>
				<source
					src={audio[`../../assets/audio/${project.route}.ogg`]}
					type="audio/ogg"
				/>
				<source
					src={audio[`../../assets/audio/${project.route}.mp3`]}
					type="audio/mpeg"
				/>
			</audio>
		</div>
	);
}

export default Project;
