var play = false;

$(document).ready(() => {
  $("body").animate({
    opacity: 1
  }, 1000);

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

  let observer = new IntersectionObserver(entries => {
    entries.map(entry => {
      if (entry.isIntersecting)
        $("#page").html($(entry.target).index());
    });
  }, {
    threshold: 0.5
  });
  $(".main").each((index, target) => observer.observe(target));

  $("a").each((index, link) => {
    let href = $(link).attr("href");
    if ((/html$/).test(href)) {
      $(link).click(event => {
        event.preventDefault();
        $("#transition").removeClass("d-none");
        $("#transition").animate({
          opacity: "1"
        }, 500);
        setTimeout(() => window.location.href = href, 1000);
      });
    }
  });

  $(".marquee").marquee({
    duplicated: true,
    direction: "left",
    duration: 22000,
    pauseOnHover: true,
    startVisible: true
  });
});