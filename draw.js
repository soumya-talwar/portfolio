function setup() {
	$("#main").mousedown(() => {
		$("#instruction").addClass("d-none");
		var canvas = createCanvas(windowWidth, $(document).height());
		canvas.parent("main");
		$("#erase").click(() => clear());
		$("#main").off("mousedown");
	});
}

function mouseDragged() {
	fill(0);
	strokeWeight(8);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
