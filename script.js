var descriptions1 = [
	"I built myself my ideal husband",
	"(Coming soon) Wherever I go, this tiny duckling robot follows",
	"Win this game to win a date with me",
	"A fairy dust sound plays when my manager is near",
	"I released a BTS fanfiction recommendation engine on Twitter",
	"A Whatsapp bot to compliment me every hour on my birthday",
	"My Twitter account will keep tweeting even after I am dead",
	"An advocacy of 128 non-binary genders",
	"Exploring sexual violence among great apes with art",
];

var descriptions2 = [
	"Chrome dino but: jump over tax blocks or get sent to the tax filing portal",
	"I was depressed so I built a sad flappy bird clone that only flies if you clap for it",
];

// var kaomojis = ["ಠ_ಠ"];
var kaomojis = ["ᕕ( ᐛ )ᕗ"];

$(document).ready(() => {
	$("body").animate(
		{
			opacity: 1,
		},
		1000
	);

	let observer = new IntersectionObserver(
		(entries) => {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					let index = $(entry.target).index();
					if (index == 0) $("#count").html("");
					else $("#count").html(index + " / 8");
				}
			});
		},
		{
			threshold: 0.5,
		}
	);
	$(".snap").each((index, target) => observer.observe(target));

	$("#works").click(() => {
		$("#screen, #projects").removeClass("d-none");
		$("#screen").animate(
			{
				opacity: "0.8",
			},
			500
		);
		$("#projects").animate(
			{
				opacity: "1",
			},
			500
		);
	});

	$("#games").click(() => {
		$("#screen, #experiments").removeClass("d-none");
		$("#screen").animate(
			{
				opacity: "0.8",
			},
			500
		);
		$("#experiments").animate(
			{
				opacity: "1",
			},
			500
		);
	});

	$(".close h3").click(() => {
		$("#screen, .wrapper").animate(
			{
				opacity: "0",
			},
			500,
			() => {
				$("#screen, .wrapper").addClass("d-none");
				$("#error").html("");
			}
		);
	});

	$("#projects .folder img")
		.not("#duckling img")
		.hover(
			function (event) {
				let attr = $(this).attr("src");
				$(this).attr("src", attr.replace("folder-1.png", "folder-2.png"));
				$("#tooltip span").html(
					descriptions1[$("#projects .folder img").index($(this))]
				);
				$("#tooltip").css({
					top: $(this).offset().top + $(this).height() + 10,
					left: $(this).offset().left + $(this).width() / 2,
				});
				$("#tooltip").removeClass("d-none");
			},
			function (event) {
				let attr = $(this).attr("src");
				$(this).attr("src", attr.replace("folder-2.png", "folder-1.png"));
				$("#tooltip").addClass("d-none");
			}
		);

	$("#duckling img").hover(function (event) {
		$("#tooltip span").html(descriptions1[1]);
		$("#tooltip").css({
			top: $(this).offset().top + $(this).height() + 10,
			left: $(this).offset().left + $(this).width() / 2,
		});
		$("#tooltip").toggleClass("d-none");
	});

	$("#experiments .folder img").hover(
		function (event) {
			let attr = $(this).attr("src");
			$(this).attr("src", attr.replace("folder-1.png", "folder-2.png"));
			$("#tooltip span").html(
				descriptions2[$("#experiments .folder img").index($(this))]
			);
			$("#tooltip").css({
				top: $(this).offset().top + $(this).height() + 10,
				left: $(this).offset().left + $(this).width() / 2,
			});
			$("#tooltip").removeClass("d-none");
		},
		function (event) {
			let attr = $(this).attr("src");
			$(this).attr("src", attr.replace("folder-2.png", "folder-1.png"));
			$("#tooltip").addClass("d-none");
		}
	);

	$("#links .folder img").hover(
		function (event) {
			let attr = $(this).attr("src");
			$(this).attr("src", attr.replace("folder-1.png", "folder-2.png"));
		},
		function (event) {
			let attr = $(this).attr("src");
			$(this).attr("src", attr.replace("folder-2.png", "folder-1.png"));
		}
	);

	$("#projects .folder img")
		.not("#duckling img")
		.click(function (event) {
			let href = $(this).parent().attr("href");
			$("#transition").removeClass("d-none");
			$("#transition").animate(
				{
					opacity: "1",
				},
				500
			);
			setTimeout(() => {
				window.location.href = href;
			}, 1000);
		});

	$("#experiments .folder img, #links .folder img").click(function (event) {
		window.open($(this).parent().attr("href"), "_blank");
	});

	$("#kaomoji").html(kaomojis[Math.floor(Math.random() * kaomojis.length)]);

	$("#play").click(() => {
		$("#description")[0].play();
		$("#play, #pause").toggleClass("d-none");
	});

	$("#description").on("ended", () => {
		$("#play, #pause").toggleClass("d-none");
	});

	$("#pause").click(() => {
		$("#description")[0].pause();
		$("#play, #pause").toggleClass("d-none");
	});

	$("#transcript").click(() => {
		if ($("#script").hasClass("d-none")) {
			$("#transcript").html("Close transcript");
			$("#script").removeClass("d-none");
		} else {
			$("#transcript").html("View transcript");
			$("#script").addClass("d-none");
		}
	});

	$(".video img").click(function (event) {
		let video = $(this).closest(".video").find("video");
		video[0].play();
		$(this).closest(".playback").addClass("d-none");
		video.on("ended", () => {
			$(this).closest(".playback").removeClass("d-none");
		});
	});
});
