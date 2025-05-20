function setup() {
	$("#me").hover(() => {
		$("#popup").css({
			top: constrain(
				mouseY + 10,
				0,
				$(document).height() - $("#popup img").width() * 0.528 - 20
			),
			left: constrain(
				mouseX + 10,
				0,
				$(window).width() - $("#popup img").width() - 20
			),
		});
		$("#popup").toggleClass("d-none");
	});
	$("#copy").click(() => {
		$("#copy").html("[copied!]");
		setTimeout(() => $("#copy").html("copy email"), 1000);
		navigator.clipboard.writeText("soumya.talwar97@gmail.com");
	});
}
