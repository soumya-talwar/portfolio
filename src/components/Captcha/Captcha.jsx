import { useState } from "react";
import usePageTransition from "../../hooks/usePageTransition";
import lexicon from "../../data/lexicon.json";
import "../Dialog/Dialog.css";
import "./Captcha.css";

function Captcha({ dialogs, setDialogs, type, setTransition }) {
	const pageTransition = usePageTransition(setTransition);
	const [compliment, setCompliment] = useState("");
	const [error, setError] = useState("");
	const errors = [
		"You call that a compliment? Try again.",
		"Weak. Next.",
		"Mm, I've heard nicer. Try again.",
	];
	return (
		<>
			<div className={`screen ${dialogs[type] ? "visible" : ""}`}></div>
			<div id="captcha" className={`wrapper ${dialogs[type] ? "visible" : ""}`}>
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
					<h2>COMPLIMENT ME TO CONTINUE</h2>
					<small>
						Captcha, but instead of proving you’re human, prove you’re kind.
						<span className="gray">
							{" "}
							(And yes, my code will check if the compliment is any good.)
						</span>{" "}
						Press enter to send.
					</small>
					<input
						type="text"
						id="compliment"
						placeholder="say something nice"
						value={compliment}
						onChange={(e) => setCompliment(e.target.value)}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								let result = compliment
									.split(/\W+/)
									.reduce((sum, word) => sum + (Number(lexicon[word]) || 0), 0);
								if (result < 3)
									setError(errors[Math.floor(Math.random() * errors.length)]);
								else {
									pageTransition("/contact");
									setDialogs({
										projects: false,
										experiments: false,
										compliment: false,
									});
									setCompliment("");
								}
							}
						}}
					/>
					<small id="error">{error}</small>
				</div>
			</div>
		</>
	);
}

export default Captcha;
