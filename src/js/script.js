const { message } = require("laravel-mix/src/Log");

function initScript() {
  const mediaQuery = window.matchMedia("(max-width: 992px)");
  const bars = document.querySelector(".bars"),
    navOverlay = document.querySelector(".nav-overlay"),
    menu = document.querySelector(".header-nav"),
    menuMobile = document.querySelector(".header__menu.mobile"),
    headerAnim = document.querySelector("#headerAnim");

  const links = menuMobile.querySelectorAll(".header__menu-item");

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

  const toggleBurger = (e, isBurgerIcon = false) => {
    if (isBurgerIcon) {
      bars.classList.toggle("open");
    } else {
      bars.classList.remove("open");
    }

    headerAnim.classList.add("overflowVisible");
    navOverlay.classList.toggle("open");
    menu.classList.toggle("open");
    document.querySelector("body").classList.toggle("openMenu");
    document
      .querySelectorAll("li.header__menu-item")
      .forEach((item) => item.classList.toggle("show"));
    const wrapFadeUp = document.querySelector(".fade-up.header__wrapper");
    wrapFadeUp.classList.toggle("show");
  };

  // Set up click and window resize callbacks, then init the nav.
  bars.addEventListener("click", function (e) {
    toggleBurger(e, true);
  });

  links.forEach((link) => {
    if (!link.classList.contains("header__menu-item-lang-mobile")) {
      link.addEventListener("click", function (e) {
        toggleBurger(e);
      });
    }
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

function isInView(el, top = 0) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Перевіряємо, чи елемент видимий хоча б частково по вертикалі та горизонталі
  const isPartiallyVisible =
    rect.top + top <= windowHeight &&
    rect.bottom >= 0 &&
    rect.left <= windowWidth &&
    rect.right >= 0;

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
    const isVisible = isInView(services);

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
    const isVisible = isInView(global);

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
    const isVisible = isInView(locations);

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

  const initForm = () => {
    const contacts = document.querySelector('#contacts');
    const contactsTriger = document.querySelector('#contact-screen')
    const isVisible = isInView(contactsTriger);

    if(isVisible){
      const slideInRight = contactsTriger.querySelectorAll('.slideInRight')
      const slideInLeft = contactsTriger.querySelectorAll('.slideInLeft')
      const number = contactsTriger.querySelector('.zoom-appear')
      number.classList.add('visible')
      slideInRight.forEach((slide) => slide.classList.add("visible"))
      slideInLeft.forEach((slide) => slide.classList.add("visible"))
    }
  }

  initFadeUp();
  initAbout();
  initServices();
  initGlobal();
  initForm();
  initLocation();
};

document.addEventListener("scroll", () => {
  initAnimations();
});

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  lazySizes.init();
});

//popup script open

const boxModal = document.querySelector(".box");
const btnsOpenModal = document.querySelectorAll(".popup");
const body = document.querySelector("body");
const formBtn = document.querySelector(".form__btn");
const thanks = document.querySelector(".thx");
const inputs = boxModal.querySelectorAll(".box-input");
const boxForm = document.querySelector("#boxForm");

console.log(boxForm);

btnsOpenModal.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    boxModal.classList.toggle("active");
    body.classList.add("open");
  });
});

//close popup

boxModal.addEventListener("click", function (e) {
  if (e.target === boxModal) {
    this.classList.toggle("active");
    body.classList.remove("open");
    thanks.classList.remove("show");
  }
});

boxForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const sendData = async () => {
    await fetch("message.php", {
      method: "POST",
      body: JSON.stringify({
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value,
      }),
    });

    inputs.forEach((input) => (input.value = ""));

    thanks.classList.add("show");

    setTimeout(() => {
      boxModal.classList.toggle("active");
      body.classList.remove("open");
      thanks.classList.remove("show");
    }, 1500);
  };

  sendData();
});


//modal window script

const modal = document.querySelector('.services__modal-wrap')
const modalTriggerButtons = document.querySelectorAll('.modal-trigger')
const closeCross = document.querySelectorAll('.cross__line')
const cross = document.querySelector('.cross')

const openCross = () => {
  closeCross.forEach((cross) => {
    cross.classList.remove('close')
  })
}

const closeCrossHandler = () => {
  closeCross.forEach((cross) => {
    cross.classList.add('close')
  })
}

modalTriggerButtons.forEach((button) => {    //open modal
  button.addEventListener('click', () => {
    modal.classList.remove('hidden')
    document.querySelector('body').classList.add('pure')
    setTimeout(openCross, 5)
  }
  )
})

const closeModal = () => {                   //close modal 
  modal.classList.add('hidden')
  closeCrossHandler()
  document.querySelector('body').classList.remove('pure')
  console.log('close modal')
}

cross.addEventListener('click', () => {
  closeModal()
})

window.addEventListener('click', (e) => {
  if(e.target === modal){
    closeModal()
    console.log('close')
  }
})

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    closeModal()
  }
})

//end of modal window script

//contact form script

const contactInputs = document.querySelectorAll('.contact__input')
const contactForm = document.querySelector('.contact__form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // const sendData = async () => {
  //   await fetch("message.php", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: contactInputs[0].value,
  //       email: contactInputs[1].value,
  //       message: contactInputs[2].value,
  //     }),
  //   });
  // }

})

//end of contact form script


