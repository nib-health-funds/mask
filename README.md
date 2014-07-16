# mask

Restrict user input on a text field.

## Methods

### mask(el : HTMLElement, pattern : RegExp)

Restrict user input on a text field.

 - `el`      - The input element
 - `pattern` - The pattern which inputted characters must adhere to

## Usage

    var mask    = require('mask');
    var el      = document.querySelector('.js-input');
    
    mask(el, /[0-9]/) //prevent the user from entering any non-digit character
    