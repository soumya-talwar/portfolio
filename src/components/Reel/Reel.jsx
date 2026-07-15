import { useEffect } from "react";
import "./Reel.css";

function Reel({ url }) {
	useEffect(() => {
		if (window.instgrm) {
			window.instgrm.Embeds.process();
			return;
		}
		const script = document.createElement("script");
		script.src = "https://www.instagram.com/embed.js";
		script.async = true;
		script.onload = () => window.instgrm?.Embeds.process();
		document.body.appendChild(script);
	}, []);

	return (
		<blockquote
			className="instagram-media"
			data-instgrm-permalink={url}
			data-instgrm-version="14"
			style={{
				maxWidth: "450px",
				minWidth: "326px",
				width: "100%",
				flexShrink: 0,
				margin: "0 auto",
			}}
		/>
	);
}

export default Reel;
