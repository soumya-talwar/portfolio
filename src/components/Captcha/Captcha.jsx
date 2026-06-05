import "../Dialog/Dialog.css";
import "./Captcha.css";

function Captcha({ dialogs, setDialogs, type, setTransition }) {
	console.log(dialogs);
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
						<span style={{ color: "#999999" }}>
							{" "}
							(And yes, my code will check if the compliment is any good.)
						</span>{" "}
						Press enter to send.
					</small>
					<input type="text" id="compliment" placeholder="say something nice" />
					<small id="error"></small>
				</div>
			</div>
		</>
	);
}

export default Captcha;
