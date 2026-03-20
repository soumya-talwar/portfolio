const STORAGE_KEY = "persona";

if (!localStorage.getItem(STORAGE_KEY)) {
	localStorage.setItem(STORAGE_KEY, "friend");
}

function getMode() {
	return localStorage.getItem(STORAGE_KEY);
}

function setMode(mode) {
	localStorage.setItem(STORAGE_KEY, mode);
}

$(document).ready(() => {
	const reactions = [$("#toggle1")[0], $("#toggle2")[0]];
	function sync() {
		const persona = getMode();
		if (persona === "recruiter") {
			$("#toggle svg, #recruiter svg").addClass("on");
			$("#mode").text("Yes, I am a recruiter");
			$("#recruiter span").text("recruiter mode");
		} else {
			$("#toggle svg, #recruiter svg").removeClass("on");
			$("#mode").text("No, I am a friend.");
			$("#recruiter span").text("friend mode");
		}
		let html =
			persona == "friend"
				? `> TALKING PLANTS, GAMES TO WIN A DATE WITH ME, AUTOMATED WHATSAPP COMPLIMENTS—I BUILD <span style="text-decoration: line-through">OVERENGINEEREED</span> JAVASCRIPT JOKES. <span id="scroll">SCROLL DOWN<span id="cursor">_</span></span>`
				: `> INTERACTIVE SYSTEMS, CREATIVE TECHNOLOGY, EXPERIMENTAL PRODUCTS—I TURN IDEAS INTO EXPERIENCES. SCROLL DOWN<span id="cursor">_</span></span>`;
		$("#bio").animate(
			{
				opacity: 0.2,
			},
			300,
			() => {
				$("#bio").html(html);
				$("#bio").animate(
					{
						opacity: 1,
					},
					300,
				);
			},
		);
	}

	sync();

	$("#toggle svg, #recruiter svg").click(() => {
		const current = getMode();
		const next = current === "recruiter" ? "friend" : "recruiter";
		setMode(next);
		reactions[next === "friend" ? 0 : 1].play();
		sync();
	});

	$("#continue").click(function (event) {
		let href = $(this).parent().attr("href");
		$("#transition").removeClass("d-none");
		$("#transition").animate(
			{
				opacity: "1",
			},
			500,
		);
		setTimeout(() => {
			window.location.href = href;
		}, 1000);
	});
});
