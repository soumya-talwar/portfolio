import "./Folder.css";
import folderImage from "../../assets/images/folder-1.png";

function Folder({ route, title }) {
	return (
		<div className="folder">
			<img src={folderImage} alt={`${title} folder`} />
			<small>{title}</small>
		</div>
	);
}

export default Folder;
