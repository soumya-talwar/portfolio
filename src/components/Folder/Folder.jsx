import { useState } from "react";
import usePageTransition from "../../hooks/usePageTransition";
import "./Folder.css";
import folderInactive from "../../assets/images/misc/folder-1.png";
import folderActive from "../../assets/images/misc/folder-2.png";

function Folder({
	route,
	title,
	hook,
	type,
	tooltip,
	setTooltip,
	setTransition,
	setDialogs,
}) {
	const [folder, setFolder] = useState(false);
	const pageTransition = usePageTransition(setTransition);
	return (
		<div
			className="folder"
			onMouseEnter={(e) => {
				setFolder(true);
				let rect = e.currentTarget.getBoundingClientRect();
				setTooltip({
					visible: true,
					left: rect.left + rect.width / 2,
					top: rect.top + 50,
					text: hook,
				});
			}}
			onMouseLeave={() => {
				setFolder(false);
				setTooltip((prev) => ({ ...prev, visible: false }));
			}}
			onClick={() => {
				if (type === "projects") {
					pageTransition(`projects/${route}`);
					setDialogs({
						projects: false,
						experiments: false,
						compliment: false,
					});
				} else window.open(route, "_blank", "noopener, noreferrer");
			}}>
			<img
				src={folder ? folderActive : folderInactive}
				alt={`${title} folder`}
			/>
			<small>{title}</small>
		</div>
	);
}

export default Folder;
