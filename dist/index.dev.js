"use strict";

var screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenValue = '';
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    item = _step.value;
    item.addEventListener('click', function (e) {
      buttonText = e.target.innerText;
      console.log(buttonText);

      if (buttonText == 'X') {
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
      } else if (buttonText == "C") {
        screenValue = "";
        screen.value = screenValue;
      } else if (buttonText == '=') {
        screen.value = eval(screenValue);
      } else if (buttonText == "B") {
        screen.value = screenValue.substr(0, screenValue.length - 1);
        screenValue = screen.value;
      } else {
        screenValue += buttonText;
        screen.value = screenValue;
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}