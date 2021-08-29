// Set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Dynamic Height Links Toggle

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  // Instead we are changing the display by setting the height dynamically
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed Scrollbar on Scroll

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// Smooth Scroll

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Accessing the target section href without the #
    const id = e.currentTarget.getAttribute("href").slice(1);
    // Slice (1) because we do not want the #
    // Direcly start from index 1
    const element = document.getElementById(id);
    // Finding the target element position from top
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    // Reason it did not scroll to the exact part where section starts is because navbar covers it
    let position = element.offsetTop - navHeight;

    // Since nav becomes position : fixed - It gets removed from the flow and no longer take the same height and hence position value changes
    if (!fixedNav) {
      position = position - navHeight;
    }
    // To solve the problem in smaller screen, we need to take into consideration the containerHeight
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // Closing nav container afer clicking in mobile view
    linksContainer.style.height = 0;
  });
});
