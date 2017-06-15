import './menu.scss'

export default  function createMenu(arr, className) {


    var el = document.createElement('ul');
    el.className = className;
    arr.forEach(function(element) {
        el.innerHTML+=`<li>${element}</li>`;
    }, this);

    document.body.appendChild(el);
}