import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Folder.css";
import folderInactive from "../../assets/images/folder-1.png";
import folderActive from "../../assets/images/folder-2.png";

function Folder({ route, title, hook, type, tooltip, setTooltip }) {
	const [folder, setFolder] = useState(false);
	const navigate = useNavigate();
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
				if (type == "projects") navigate(`/projects/${route}`);
				else window.open(route, "_blank", "noopener, noreferrer");
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
