!function(n){var e={};function c(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=n,c.c=e,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)c.d(t,l,function(e){return n[e]}.bind(null,l));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconsole.log(`Hello world!`);\n\nconst navSlide = () => {\n  const burger = document.querySelector('.burger');\n  const nav = document.querySelector('.nav-links');\n  const navLinks = document.querySelectorAll('.nav-links li')\n\n  burger.addEventListener('click', () => {\n    nav.classList.toggle('nav-active');\n\n    navLinks.forEach((link, index) => {\n      if(link.style.animation){\n        link.style.animation = '';\n      } else {\n        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;\n      }\n    })\n\n    burger.classList.toggle('toggle');\n  });\n}\n\n\nconst app = () => {\n  navSlide();\n}\n\napp();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGlFQUFpRSxnQkFBZ0I7QUFDakY7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cblxuY29uc29sZS5sb2coYEhlbGxvIHdvcmxkIWApO1xuXG5jb25zdCBuYXZTbGlkZSA9ICgpID0+IHtcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmtzJyk7XG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rcyBsaScpXG5cbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtYWN0aXZlJyk7XG5cbiAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgaWYobGluay5zdHlsZS5hbmltYXRpb24pe1xuICAgICAgICBsaW5rLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluay5zdHlsZS5hbmltYXRpb24gPSBgbmF2TGlua0ZhZGUgMC41cyBlYXNlIGZvcndhcmRzICR7aW5kZXggLyA3ICsgMC4zfXNgO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlJyk7XG4gIH0pO1xufVxuXG5cbmNvbnN0IGFwcCA9ICgpID0+IHtcbiAgbmF2U2xpZGUoKTtcbn1cblxuYXBwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);