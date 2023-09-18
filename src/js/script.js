function initScript() {
  const mediaQuery = window.matchMedia("(max-width: 992px)");
  const bars = document.querySelector(".bars"),
    navOverlay = document.querySelector(".nav-overlay"),
    menu = document.querySelector(".header-nav");

  function resizeNav() {
    // Set the circle radius to the length of the window diagonal,
    // this way we're only making the circle as big as it needs to be.
    let radius = Math.sqrt(
      Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
    );
    let diameter = radius * 2;
    navOverlay.style.width = diameter + "px";
    navOverlay.style.height = diameter + "px";
    navOverlay.style.marginTop = -radius + "px";
    navOverlay.style.marginLeft = -radius + "px";
  }

  if (mediaQuery.matches) {
    // Set the nav height to fill the window
    document.querySelector(".header-nav").style.height =
      window.innerHeight + "px";
  } else {
    document.querySelector(".header-nav").style.height = "unset";
  }

  // Set up click and window resize callbacks, then init the nav.
  bars.addEventListener("click", function () {
    this.classList.toggle("open");
    navOverlay.classList.toggle("open");
    menu.classList.toggle("open");
    document.querySelector("body").classList.toggle("openMenu");
    document
      .querySelectorAll("li.header__menu-item")
      .forEach((item) => item.classList.toggle("show"));
    const wrapFadeUp = document.querySelector(".fade-up.header__wrapper");
    wrapFadeUp.classList.toggle("show");
  });

  //fade-up header__wrapper

  //window.resize(resizeNav());

  resizeNav();
}

window.onload = initScript;

//tabs on services screen

const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

function changeClass(el) {
  el.classList.toggle("active");
}
tabs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const currentTab = item.dataset.btn;
    changeClass(item);
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove("active");
      if (content[i].dataset.content === currentTab) {
        content[i].classList.add("active");
      }
    }
  });
});

// services mobile accordion

//accord creation function on services

function accordCreate(accord) {
  accord.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });
  });
}

//faq accordion function
const accordTitle = document.querySelectorAll(".accord__title");
if (accordTitle) {
  accordCreate(accordTitle);
}

// const isInView = (elem, bottom = 30) => {
//   // Get the top and bottom of the viewport.
//   const docViewTop = window.pageYOffset;
//   const docViewBottom = docViewTop + window.innerHeight;

//   // console.log(elem.offsetHeight);

//   // Get the top and bottom of the element.
//   const elemTop = elem.offsetTop;
//   const elemBottom = elemTop + elem.offsetHeight;

//   console.log(elemBottom, docViewBottom, elemTop, docViewTop);

//   // Return true if the element is within the viewport.
//   return elemBottom <= docViewBottom && elemTop >= docViewTop;
// };

function isInView(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Перевіряємо, чи елемент видимий хоча б частково по вертикалі та горизонталі
  const isPartiallyVisible = (
    (rect.top <= windowHeight && rect.bottom >= 0) &&
    (rect.left <= windowWidth && rect.right >= 0)
  );

  return isPartiallyVisible;
}

const animations = {
  fadeUp: [
    {
      isElementsCreated: false,
      isElementsFired: false,
    },
    {
      isElementsCreated: false,
      isElementsFired: false,
    },
    {
      isElementsCreated: false,
      isElementsFired: false,
    },
    {
      isElementsCreated: false,
      isElementsFired: false,
    },
  ],
};

const initAnimations = () => {
  const initFadeUp = () => {
    const fadeUp = document.querySelectorAll(".fade-up");
    fadeUp.forEach((element, index) => {
      if (!animations.fadeUp[index].isElementsCreated) {
        const container = element.dataset.container;
        const child = document.createElement(container || "span");
        child.classList.add("fade-up-child");
        child.innerHTML = element.innerHTML;
        element.innerHTML = "";
        element.appendChild(child);

        animations.fadeUp[index].isElementsCreated = true;
      }

      if (isInView(element) && !animations.fadeUp[index].isElementsFired) {
        element.querySelector(".fade-up-child").classList.add("visible");
        element.classList.add("shown");
        animations.fadeUp[index].isElementsFired = true;
      }
    });
  };

  const initAbout = () => {
    const about = document.querySelector("#about");
    const isVisible = isInView(about, 300);

    if (isVisible) {
      const number = about.querySelector(".zoom-appear");
      const slidesIn = about.querySelectorAll(".slideInRight");
      const zoomDown = about.querySelector(".zoomDown");
      number.classList.add("visible");
      zoomDown.classList.add("visible");
      slidesIn.forEach((slide) => slide.classList.add("visible"));
    }
  };

  const initServices = () => {
    const services = document.querySelector("#services");
    const isVisible = isInView(services, 300);

    if (isVisible) {
      const number = services.querySelector(".zoom-appear");
      const slidesIn = services.querySelectorAll(".slideInRight");
      const slidesInLeft = services.querySelectorAll(".slideInLeftServices");
      const zoomDown = services.querySelector(".zoomDown");

      number.classList.add("visible");
      zoomDown.classList.add("visible");
      slidesIn.forEach((slide) => slide.classList.add("visible"));
      slidesInLeft.forEach((slide) => slide.classList.add("visible"));
    }
  };

  const initGlobal = () => {
    const global = document.querySelector("#global");
    const isVisible = isInView(global, 300);

    if (isVisible) {
      const numbers = global.querySelectorAll(".zoom-appear");
      const slidesInRight = global.querySelectorAll(".slideInRight");
      const slidesInLeft = global.querySelectorAll(".slideInLeft");
      const zoomDown = global.querySelector(".zoomDown");
      const slideTop = global.querySelector(".global__wrap-content");

      slideTop.classList.add("visible");
      zoomDown.classList.add("visible");
      numbers.forEach((number) => number.classList.add("visible"));
      slidesInRight.forEach((slide) => slide.classList.add("visible"));
      slidesInLeft.forEach((slide) => slide.classList.add("visible"));
    }
  };

  const initLocation = () => {
    const locations = document.querySelector("#locations");
    const isVisible = isInView(locations, 300);

    if (isVisible) {
      const slidesTop = locations.querySelector(".locations__wrap-content_bg");
      const wrapMap = locations.querySelector(".locations__wrap-map");
      const scale = locations.querySelector(".locations__wrap-map-template");
      const slidesInRight = locations.querySelectorAll(".slideInRight");
      const slideInRightTitle =
        locations.querySelectorAll(".slideInRightTitle");
      const slideInLeftLocation = locations.querySelectorAll(
        ".slideInLeftLocation"
      );

      slidesTop.classList.add("visible");
      scale.classList.add("visible");
      wrapMap.classList.add("visible");
      slidesInRight.forEach((slide) => slide.classList.add("visible"));
      slideInRightTitle.forEach((slide) => slide.classList.add("visible"));
      slideInLeftLocation.forEach((number) => number.classList.add("visible"));
    }
  };

  initFadeUp();
  initAbout();
  initServices();
  initGlobal();
  initLocation();
};

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  lazySizes.init();
});

document.addEventListener("scroll", () => {
  initAnimations();
});
