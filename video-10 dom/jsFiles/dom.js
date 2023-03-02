"use strict";
var btn = document.getElementById('btn');
var input = document.getElementById('input');
var handleClick = function (event) {
    var target = event.target;
    var parent = target === null || target === void 0 ? void 0 : target.parentNode;
    var p = document.createElement('p');
    p.innerText = input.value;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(p);
};
// btn?.addEventListener('click', (e) => handleClick)
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', handleClick);
