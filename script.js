var play = false;
var kaomojis = ["ಠ_ಠ"];

$(document).ready(() => {
	$("body").animate(
		{
			opacity: 1,
		},
		1000
	);

	$("#projects, #list").hover(() => {
		$("#list").toggleClass("d-none");
	});

	let audio = document.getElementById("music");
	$("#play").click(() => {
		if (!play) audio.play();
		else audio.pause();
		play = !play;
		$("#play").toggleClass(["fa-play", "fa-pause"]);
	});

	let observer = new IntersectionObserver(
		(entries) => {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					let index = $(entry.target).index();
					if (index == 0) $("#page").html("scroll down");
					else $("#page").html(index + " / 9");
				}
			});
		},
		{
			threshold: 0.5,
		}
	);
	$(".main").each((index, target) => observer.observe(target));

	$("a").each((index, link) => {
		let href = $(link).attr("href");
		if (/html$/.test(href)) {
			$(link).click((event) => {
				event.preventDefault();
				$("#transition").removeClass("d-none");
				$("#transition").animate(
					{
						opacity: "1",
					},
					500
				);
				setTimeout(() => (window.location.href = href), 1000);
			});
		}
	});

	$("#kaomoji").html(kaomojis[Math.floor(Math.random() * kaomojis.length)]);

	$(".extra").each((index, text) => {
		let project = window.location.href.match(/[^/]+$/)[0].split(".")[0];
		$(text).hover(() => {
			$("#popup img").attr("src", `../images/${project} ${index}.gif`);
			if (project == "dokidoki" || project == "11may") {
				$("#popup img").css({
					height: "70vh",
					width: "auto",
				});
				$("#popup").css({
					top: constrain(
						mouseY + 10,
						0,
						$(document).height() - $("#popup img").height() - 20
					),
					left: constrain(
						mouseX + 10,
						0,
						$(window).width() - $("#popup img").height() * 0.439 - 20
					),
				});
			} else {
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
			}
			$("#popup").toggleClass("d-none");
		});
	});

	$(".marquee").marquee({
		duplicated: true,
		direction: "left",
		duration: 20000,
		pauseOnHover: true,
		startVisible: true,
	});

	$("#copy").click(() => {
		$("#copy").html("[copied!]");
		setTimeout(() => $("#copy").html("[copy email]"), 1000);
		navigator.clipboard.writeText("soumya.talwar97@gmail.com");
	});
});
