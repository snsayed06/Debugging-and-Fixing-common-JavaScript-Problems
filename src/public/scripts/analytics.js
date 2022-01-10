/* global window, XMLHttpRequest */

(function() {
  'use strict';

  function trackConversion(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.getrantr.com:9000/api/analytics/conversion');
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
        if (callback) callback();
      }
    });
    xhr.send();
  }

  // New Feature! Now we can automatically Intercept all form submissions as a conversion event.
  window.addEventListener('submit', function(evt) {
    var form = evt.target;
    if (form.hasAttribute('ignore')) { return; }

    evt.preventDefault();

    trackConversion(function() {
      // Exercise 7
      // form.submit(); <--Remove
      HTMLFormElement.prototype.submit.call(form);
    });

  }, true);

  window.analytics = {

    trackConversion: trackConversion

  };

})();
