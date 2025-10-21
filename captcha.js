var data;
async function load() {
	// For prod
	data = await fetch("/portfolio/data/lexicon.json").then((response) =>
		response.json()
	);
	// For dev
	// data = await fetch("/data/lexicon.json").then((response) => response.json());
}
var errors = [
	"You call that a compliment? Try again.",
	"Weak. Next.",
	"Mm, I've heard nicer. Try again.",
];

$(document).ready(() => {
	load();
	$("#contact").click(() => {
		$("#screen, #captcha").removeClass("d-none");
		$("#screen").animate(
			{
				opacity: "0.8",
			},
			500
		);
		$("#captcha").animate(
			{
				opacity: "1",
			},
			500,
			() => $("#compliment").focus()
		);
	});

	$("#compliment").keyup(function (event) {
		if (event.which == 13) {
			let compliment = $(this).val();
			let result = compliment
				.split(/\W+/)
				.reduce((sum, word) => sum + (Number(data[word]) || 0), 0);
			console.log(result);
			if (result < 3)
				$("#error").html(errors[Math.floor(Math.random() * errors.length)]);
			else {
				emailjs.send("service_skuixqg", "template_mb14sa5", {
					compliment: compliment,
				});
				$("#screen").animate(
					{
						opacity: "0",
					},
					500,
					() => $("#screen").addClass("d-none")
				);
				$("#captcha").animate(
					{
						opacity: "0",
					},
					500,
					() => $("#captcha").addClass("d-none")
				);
				$("#transition").removeClass("d-none");
				$("#transition").animate(
					{
						opacity: "1",
					},
					500
				);
				setTimeout(() => {
					window.location.href = "/portfolio/contact.html";
				}, 1000);
			}
		} else $("#error").html("");
	});
});
