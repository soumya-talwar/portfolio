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
      $("#landing, #menu, #pagination").animate({
        "color": "#FFF"
      }, 400);
      $("#contact").animate({
        "color": "#FFF",
        "background-color": "#000"
      }, 400);
    } else {
      bg = 255;
      trail = 0;
      $("#landing, #menu, #pagination").animate({
        "color": "#000"
      }, 400);
      $("#contact").animate({
        "color": "#000",
        "background-color": "#FFF"
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

  $("#landing").on("slid.bs.carousel", () => {
    let index = $(".carousel-item").siblings(".active").index();
    $("#page").html(index);
  });

  $(".marquee").marquee({
    duplicated: true,
    direction: "left",
    duration: 22000,
    pauseOnHover: true,
    startVisible: true
  });
});