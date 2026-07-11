import { useState, useRef } from "react";
import Doodle from "../../components/Doodle/Doodle";
import "./Contact.css";
import hello1 from "../../assets/audio/hellos/1.m4a";
import hello2 from "../../assets/audio/hellos/2.m4a";
import hello3 from "../../assets/audio/hellos/3.m4a";
import hello4 from "../../assets/audio/hellos/4.m4a";
import me1 from "../../assets/images/misc/me/1.webp";
import me2 from "../../assets/images/misc/me/2.webp";
import me3 from "../../assets/images/misc/me/3.webp";

function Contact() {
	const hellos = [hello1, hello2, hello3, hello4];
	const helloRefs = useRef(hellos.map((hello) => new Audio(hello)));
	const selfies = [me1, me2, me3];
	const [selfie, setSelfie] = useState({
		visible: false,
		top: 0,
		left: 0,
		index: 0,
	});
	const [copy, setCopy] = useState("COPY EMAIL");
	const [instruction, setInstruction] = useState({
		text: "send me a doodle",
		visible: true,
	});
	const drawRef = useRef(null);
	return (
		<div id="contact">
			<div id="social">
				<h2>
					<span
						id="me"
						onMouseEnter={(e) => {
							const hello =
								helloRefs.current[
									Math.floor(Math.random() * helloRefs.current.length)
								];
							hello.currentTime = 0;
							hello.play();
							setSelfie((prev) => ({
								visible: true,
								left: e.clientX,
								top: e.clientY,
								index: prev.index + 1,
							}));
						}}
						onMouseLeave={() => {
							setSelfie({ ...selfie, visible: false });
						}}>
						YOU FOUND ME
					</span>
					. I ANSWER EMAILS AND I LOVE COMPLIMENTS.
				</h2>
				<div id="links">
					<h3>
						&gt; [{" "}
						<span
							id="email"
							onClick={() => {
								navigator.clipboard.writeText("soumya.talwar97@gmail.com");
								setCopy("COPIED!");
								setTimeout(() => setCopy("COPY EMAIL!"), 1000);
							}}>
							{copy}
						</span>{" "}
						]
					</h3>
					<h3>
						&gt; LOOK AT MY{" "}
						<a
							href="https://in.linkedin.com/in/soumya-talwar-25596015a"
							target="_blank">
							LINKEDIN
						</a>
					</h3>
					<h3>
						&gt; SEE MY{" "}
						<a
							href="https://www.instagram.com/soumyaishavingfun/"
							target="_blank">
							INSTAGRAM
						</a>
					</h3>
					<h3>
						&gt;{" "}
						<a href="https://ebichu-ten.vercel.app/" target="_blank">
							SPEAK TO MY AI MANAGER
						</a>
					</h3>
				</div>
			</div>
			<div
				id="draw"
				ref={drawRef}
				onMouseEnter={() =>
					setInstruction({ ...instruction, text: "drag the mouse to draw" })
				}
				onMouseLeave={() =>
					setInstruction({ ...instruction, text: "send me a doodle" })
				}>
				<small
					id="instruction"
					className={instruction.visible ? "" : "invisible"}>
					{instruction.text}
				</small>
				{<Doodle drawRef={drawRef} setInstruction={setInstruction} />}
			</div>
			<img
				id="selfie"
				src={selfies[selfie.index % 3]}
				style={{ left: `${selfie.left + 20}px`, top: `${selfie.top + 20}px` }}
				className={selfie.visible ? "" : "invisible"}
			/>
		</div>
	);
}

export default Contact;
