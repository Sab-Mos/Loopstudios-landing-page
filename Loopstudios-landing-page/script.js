let bars = document.querySelector(".nav-bar .icon-hamburger");

let closeBtn = document.querySelector(".nav-bar .icon-close");

let body = document.querySelector("body");

let topSection = document.querySelector(".top-section");

let navBar = document.querySelector(".nav-bar");

let linkBox = document.querySelector(".nav-bar .link-box");

let topDiv = document.querySelector(".top-section > div");

let lists = document.querySelectorAll(".link-box ul li");

let links = document.querySelectorAll(".link-box ul li a");

bars.addEventListener("click", () => {
  bars.classList.add("inactive");
  closeBtn.classList.add("active");
  body.classList.add("active");
  topSection.classList.add("active");
  topDiv.classList.add("active");
  navBar.classList.add("active");
  linkBox.classList.add("active");
  lists.forEach((list) => {
    list.classList.add("active");
  });
  links.forEach((link) => {
    link.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("active");
  bars.classList.remove("inactive");
  body.classList.remove("active");
  topSection.classList.remove("active");
  topDiv.classList.remove("active");
  navBar.classList.remove("active");
  linkBox.classList.remove("active");
  lists.forEach((list) => {
    list.classList.remove("active");
  });
  links.forEach((link) => {
    link.classList.remove("active");
  });
});
