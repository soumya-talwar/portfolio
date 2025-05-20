$(document).ready(() => {
	let status = false;
	let audio = document.getElementById("music");
	$("#control").click(() => {
		status = !status;
		if (status) {
			audio.play();
			$("#control").text("pause song");
		} else {
			$("#control").text("play song");
			audio.pause();
		}
	});
	$("#control").on("ended", function () {
		status = false;
		$("#control").text("play song");
	});

	let lines = $(".invisible");
	let index1 = 0;
	let index2 = 1;
	let type = setInterval(() => {
		if (index1 < lines.length) {
			let line = $(lines).eq(index1).text();
			if (index2 <= line.length) {
				$(".visible").eq(index1).text(line.substring(0, index2));
				index2++;
			} else {
				index1++;
				index2 = 1;
			}
		} else clearInterval(type);
	}, 40);
});
