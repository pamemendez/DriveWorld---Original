let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let loginBtn = document.querySelector("#login-btn");
let loginFormContainer = document.querySelector(".login-form-container");
let closeLoginForm = document.querySelector("#close-login-form");


loginBtn.onclick = () => {
  loginFormContainer.classList.toggle("active");
};

closeLoginForm.onclick = () => {
  loginFormContainer.classList.remove("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};


document.querySelector('.home').onmousemove = (e) => {
  document.querySelectorAll('.home-parallax').forEach(elm => {
    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90; 

    elm.style.transform = `translateX(${x}px) translateY(${y}px)`;


  });
};

document.querySelector('.home').onmouseselea = () => {
  document.querySelectorAll('.home-parallax').forEach(elm => {

    elm.style.transform = `translateX(0px) translateY(0px)`;

    
  });
};

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView:12,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView:12,
    },
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
});

