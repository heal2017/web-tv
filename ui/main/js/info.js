
function changeContextsOnElement(selector, data) {

  var element = document.querySelector(selector);
  console.log(element);
  element.textContent = "W99";
}

var data = [
  ['M01', [100, 0], '0%'],
  ['W02', [100, 100], '100%'],
  ['M01', [11, 11]]
];
console.log(data);

changeContextsOnElement('#week', data);

function setOption(data) {
  changeContextsOnElement('.container', data)
}

