var play = false;

$(document).ready(() => {
  $("#projects, #list").hover(() => {
    $("#list").toggleClass("d-none");
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
    duration: 22000,
    pauseOnHover: true,
    startVisible: true
  });
});