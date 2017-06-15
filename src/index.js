import './css/style.css'

function component () {
  var element = document.createElement('div');


  element.innerHTML = ['<h1>','Hello', 'webpack2', '</h1>'].join(' ');

  return element;
}

document.body.appendChild(component());