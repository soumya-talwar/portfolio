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

  let targets = document.querySelectorAll(".main");
  let observer = new IntersectionObserver(entries => {
    entries.map(entry => {
      if (entry.isIntersecting)
        $("#page").html($(entry.target).index());
    });
  }, {
    threshold: 0.5
  });
  targets.forEach((target) => {
    observer.observe(target);
  });

  // $(".marquee").marquee({
  //   duplicated: true,
  //   direction: "left",
  //   duration: 22000,
  //   pauseOnHover: true,
  //   startVisible: true
  // });
});