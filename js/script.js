let messageElement = document.getElementById('message');
let message = (name, domain, tld) => {
  window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
};

let oldValue = 0;
let newValue = 0;
let deltaUp = 200;
let deltaDown = -200;
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
