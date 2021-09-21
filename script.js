var dark = false;
var play = false;
var bg = 255;
var trail = 0;

$(document).ready(() => {
  $("#projects, #list").hover(() => {
    $("#list").toggleClass("d-none");
  });

  $("#mode").hover(function() {
    $(this).toggleClass(["far", "fas"]);
  });

  $("#mode").click(() => {
    if (!dark) {
      bg = 0;
      trail = 255;
      $("#landing, #menu").animate({
        "color": "#FFF"
      }, 400);
    } else {
      bg = 255;
      trail = 0;
      $("#landing, #menu").animate({
        "color": "#000"
      }, 400);
    }
    $("#black-arrow, #white-arrow").toggleClass("d-none");
    $("#mode").toggleClass(["fa-moon", "fa-sun"]);
    dark = !dark;
  });

  let audio = document.getElementById("music");
  $("#play").click(() => {
    if (!play)
      audio.play();
    else
      audio.pause();
    play = !play;
    $("#play").toggleClass(["fa-play", "fa-pause"]);
  });

  $(".marquee").marquee({
    duplicated: true,
    direction: "left",
    duration: 8000,
    gap: 40,
    pauseOnHover: true,
    startVisible: true
  });
});