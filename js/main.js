function mainInitTgStickers(options) {
  options = options || {};
  if (!RLottie.isSupported) {
    console.log("INJA1");
    if (options.unsupportedURL) {
      console.log("INJA2");
      if (!getCookie('stel_notgs')) {
        console.log("INJA3");
        setCookie('stel_notgs', 1, 7);
      }
      console.log("INJA4");
      location = options.unsupportedURL;
    }
    console.log("INJA5");
    return false;
  }
  console.log("INJA6");
  document.querySelectorAll('.js-tgsticker_image').forEach(function (imgEl) {
    console.log("INJA7");
    RLottie.init(imgEl, options);
  });
}

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 86400000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substr(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substr(nameEQ.length, c.length);
    }
  }
  return null;
}