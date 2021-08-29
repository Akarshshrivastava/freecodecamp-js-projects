const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// Did not use toggle because another functionality of play/pause was added
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// DOMContentLoaded fires when the initial HTML document has been completely loaded

// Load event is fired when the whole page has been loaded including all the media
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
