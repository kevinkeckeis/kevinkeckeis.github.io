let items = document.querySelectorAll('.item');

let opacityLowOn = function (e) {
  items.forEach((x) => {
    if (e.srcElement !== x) {
      x.classList.add('opacityLow');
      x.classList.remove('opacityFull');
    } else {
      x.classList.add('opacityFull');
      x.classList.remove('opacityLow');
    }
  });
};

let opacityLowOff = function (e) {
  items.forEach((x) => {
    if (e.srcElement !== x) {
      x.classList.add('opacityFull');
      x.classList.remove('opacityLow');
    } else {
      x.classList.add('opacityFull');
    }
  });
};

items.forEach((item) => {
  item.addEventListener('mouseenter', opacityLowOn);
  item.addEventListener('mouseleave', opacityLowOff);
  item.addEventListener('focus', opacityLowOn);
  item.addEventListener('blur', opacityLowOff);
});
