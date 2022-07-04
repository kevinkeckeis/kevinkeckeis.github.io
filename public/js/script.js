let messageElement = document.getElementById('message');
let message = (name, domain, tld) => {
  window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
};

