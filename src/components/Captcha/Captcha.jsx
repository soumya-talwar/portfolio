import { useState } from "react";
import emailjs from "@emailjs/browser";
import usePageTransition from "../../hooks/usePageTransition";
import ComplimentCheck from "../../utils/ComplimentCheck";
import "../Dialog/Dialog.css";
import "./Captcha.css";

function Captcha({ dialogs, setDialogs, type, setTransition }) {
	const pageTransition = usePageTransition(setTransition);
	const [compliment, setCompliment] = useState("");
	const [error, setError] = useState("");
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
						onKeyDown={async (e) => {
							if (e.key == "Enter") {
								const valid = await ComplimentCheck(compliment);
								if (valid.status) {
									pageTransition("/contact");
									setDialogs({
										projects: false,
										experiments: false,
										compliment: false,
									});
									setCompliment("");
									setError("");
									try {
										await emailjs.send(
											"service_skuixqg",
											"template_mb14sa5",
											{
												compliment,
											},
											"36uTK-X3XMDFUCENb",
										);
									} catch (err) {
										console.error(err);
									}
								} else {
									setError(valid.error);
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
