function setup() {
	var canvas = createCanvas($("#draw").width(), $(document).height());
	canvas.parent("draw");
	background(255);
	const hellos = [
		$("#hello1")[0],
		$("#hello2")[0],
		$("#hello3")[0],
		$("#hello4")[0],
	];
	let current = 0;
	let current2 = 0;
	$("#me").hover(
		(event) => {
			$("#popup").css({
				top: Math.min(
					event.pageY + 30,
					$(document).height() - $("#popup img").height() - 10
				),
				left: Math.min(
					event.pageX + 20,
					$(window).width() - $("#popup img").width() - 10
				),
			});
			$("#popup").removeClass("d-none");
			hellos[current].play();
			$("#popup img").addClass("d-none");
			$("#popup img").eq(current2).removeClass("d-none");
			current = (current + 1) % hellos.length;
			current2 = (current2 + 1) % 3;
		},
		() => {
			$("#popup").addClass("d-none");
		}
	);
	$("#email").click(() => {
		$("#email").html("COPIED!");
		setTimeout(() => $("#email").html("COPY EMAIL"), 1000);
		navigator.clipboard.writeText("soumya.talwar97@gmail.com");
	});
	$("#draw").hover(
		() => $("#instruction").html("drag the mouse to draw"),
		() => $("#instruction").html("send me a doodle")
	);
	$("#draw").mousedown(() => {
		$("#tooltip2, #instruction").addClass("d-none");
		$("#erase").click(() => {
			$("#tooltip2").addClass("d-none");
			$("#send span").html("email it to me (ෆ˙ᵕ˙ෆ)");
			$("#overlay").css({ width: "0" });
			clear();
			$("#instruction").removeClass("d-none");
		});
		$("#send").click(() => {
			let temp = createGraphics(300, (canvas.height * 300) / canvas.width);
			temp.background(255);
			temp.image(canvas, 0, 0, 300, (canvas.height * 300) / canvas.width);
			let doodle = temp.canvas.toDataURL("image/jpeg", 0.5);
			console.log(doodle);
			emailjs.send("service_skuixqg", "template_h1lyhmj", {
				doodle: doodle,
			});
			$("#send span").html("sending...(ง˘▽˘)ว");
			$("#overlay").animate({ width: "100%" }, 1000, () => {
				$("#send span").html("sent! (ദ്ദി ˙ᗜ˙)");
				setTimeout(() => {
					$("#tooltip2").addClass("d-none");
					$("#send span").html("email it to me (ෆ˙ᵕ˙ෆ)");
					$("#overlay").css({ width: "0" });
				}, 1000);
			});
		});
		$("#draw").mouseup(() => {
			$("#tooltip2").css({
				top: mouseY + 10,
				left: $("#draw").offset().left + mouseX + 10,
			});
			$("#tooltip2").removeClass("d-none");
		});
	});
}

function mouseDragged() {
	fill(0);
	strokeWeight(8);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
