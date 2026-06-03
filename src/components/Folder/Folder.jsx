import { useState } from "react";
import "./Folder.css";
import folderInactive from "../../assets/images/folder-1.png";
import folderActive from "../../assets/images/folder-2.png";

function Folder({ route, title, hook, tooltip, setTooltip }) {
	const [folder, setFolder] = useState(false);
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
