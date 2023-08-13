// < ====== show menu ====== >
const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");

//  < ====== menu show ====== >
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// < ====== menu hidden ====== >
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// < ====== Remove menu mobile ====== >

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});
