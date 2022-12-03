var burger_button = document.getElementById('burger');
var menu = document.getElementById('menu-list');

burger_button.addEventListener('mousedown', activate_menu);

function activate_menu() {
    menu.classList.toggle('active');
    burger_button.classList.toggle('active');
}