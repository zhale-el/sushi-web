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
  //when we click on each nav__link, we remove the show_menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

// < ====== change background Header ====== >

const scrollHeader = () => {
  const header = document.getElementById("header");

  // when the scroll is greater than 50 viewport height ,add the bg_header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg_header")
    : header.classList.remove("bg_header");
};

window.addEventListener("scroll", scrollHeader);

// < ====== show scroll up ====== >
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll_up");

  //when scrollUp is higher than 350 viewport height , add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show_scroll")
    : scrollUp.classList.remove("show_scroll");
};

window.addEventListener("scroll", scrollUp);

// < ====== scroll sections active link ====== >
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
