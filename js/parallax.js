gsap.to(".parallax", {
  scrollTrigger: {
    scrub: true
  },
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none"
});

var autoPlayVideo = document.getElementById("ocScreencapVideo");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();}


