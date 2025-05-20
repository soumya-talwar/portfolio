var projects = [
	"jimin",
	"dokidoki",
	"11may",
	"death",
	"philippa",
	"hominidae",
	"13",
	"grays",
	"taegificbot",
];
var kaomojis = ["ಠ_ಠ"];

$(document).ready(() => {
	$("body").animate(
		{
			opacity: 1,
		},
		1000
	);

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
});
