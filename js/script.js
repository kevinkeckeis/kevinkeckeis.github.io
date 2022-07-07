let messageElement = document.getElementById('message');
let message = (name, domain, tld) => {
  window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
};

// const gra = function (min, max) {
//   return Math.random() * (max - min) + min;
// };

// const gri = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const init = function () {
//   cssScrollSnapPolyfill();
// };
// init();

// const sections = document.querySelectorAll('section');
// const links = document.querySelectorAll('nav a');
// const container = document.getElementById('container');

// const changeActiveLink = (e) => {
//   var currentSection = '';
//   lastKnownScrollPosition = content.pageYOffset;
//   console.log('---', lastKnownScrollPosition);

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     console.log(sectionTop);
//     if (scrollY >= sectionTop - 60) {
//       currentSection = section.getAttribute('id');
//     }
//   });

//   links.forEach((a) => {
//     a.classList.remove('active');

//     if (a.getAttribute('href').includes(currentSection)) {
//       a.classList.add('active');
//     }
//     // if (a.classList.contains(currentSection)) {
//     //   a.classList.add('active');
//     // }
//   });
// };

// document
//   .getElementById('container')
//   .addEventListener('scroll', changeActiveLink);

// Hide Header on on scroll down

// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = $(this).scrollTop();

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $('header').removeClass('nav-down').addClass('nav-up');
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $('header').removeClass('nav-up').addClass('nav-down');
//     }
//   }

//   lastScrollTop = st;
// }

let oldValue = 0;
let newValue = 0;
let deltaUp = 200;
let deltaDown = -300;
let isUp = false;
let movement = 0;
let header = document.getElementById('nav');

window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    if (!isUp) {
      isUp = true;
      movement = newValue;
    } else if (newValue - movement > deltaUp) {
      header.classList.add('hide');
      header.classList.remove('show');
    }
  } else if (oldValue > newValue) {
    if (isUp) {
      isUp = false;
      movement = newValue;
    } else if (newValue - movement > deltaDown) {
      header.classList.remove('hide');
      header.classList.add('show');
    }
  }
  oldValue = newValue;
});
