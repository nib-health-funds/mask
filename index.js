
/**
 * Masks an inputs
 * @param   {HTMLElement} el        The mask element
 * @param   {RegExp}      pattern   The allowed characters
 */
module.exports = function(el, pattern) {

  /**
   * Get whether the character is allowed
   * @param   {string}  char
   * @returns {boolean}
   */
  function allowed(char) {
    return pattern.test(char);
  }

  /**
   * Filters out characters which don't match the pattern
   * @param   {string}  value
   * @returns {string}
   */
  function filter(value) {
    var output = '';
    for (var i=0; i<value.length; ++i) {
      if (allowed(value.charAt(i))) {
        output += value.charAt(i);
      }
    }
    return output;
  }

  el.addEventListener('keypress', function(event) {

    //figure out which character was pressed
    var char;
    if (typeof event.charCode === 'number') {
      if (event.charCode === 0) {
        char = ''; //ignore un-printable character in FF
      } else {
        char = String.fromCharCode(event.charCode); //Most browsers
      }
    } else {
      char = String.fromCharCode(event.keyCode); //IE
    }

    //let the browser handle non-visible key presses
    if (char === '' || char.charCodeAt(0) === 13) {
      return;
    }

    if (!allowed(char)) {
      event.preventDefault();
    }

  });

  //handle copy-and-paste (albeit not until the change event is fired)
  el.addEventListener('change', function(event) {
    el.value = filter(el.value);
  });

};