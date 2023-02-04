const stars = document.querySelector(".stars");
const moon = document.querySelector(".moon");
const mountainBehind = document.querySelector(".mountain-behind");
const mountainFront = document.querySelector(".mountain-front");
const mainTitle = document.querySelector(".main-title");
const btn = document.querySelector(".btn");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  stars.style.left = value * 0.4 + "px";
  moon.style.top = value * 1.05 + "px";
  mountainBehind.style.top = value * 0.6 + "px";
  mountainFront.style.top = value * 0 + "px";
  mainTitle.style.marginRight = value * 7 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});
