function setup() {
  var canvas = createCanvas(windowWidth, $(document).height());
  canvas.parent("canvas");
  $("#erase").click(() => clear());
}

function mouseDragged() {
  fill(0);
  strokeWeight(7);
  line(mouseX, mouseY, pmouseX, pmouseY);
}