var botaoNao = document.querySelector('.btn-n');
var botaoSim = document.querySelector('.btn-s');
botaoNao.addEventListener('mouseenter', function () {
    botaoNao.style.transition = 'none';
    botaoNao.style.position = 'absolute';
    var maxX = window.innerWidth - botaoNao.offsetWidth;
    var maxY = window.innerHeight - botaoNao.offsetHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    botaoNao.style.left = "".concat(randomX, "px");
    botaoNao.style.top = "".concat(randomY, "px");
});
function toggleDropdown(id) {
    var allMenus = document.querySelectorAll('.dropdown-content');
    allMenus.forEach(function (menu) {
        if (menu.id === id) {
            menu.classList.toggle('show');
        }
        else {
            menu.classList.remove('show'); // Fecha os outros
        }
    });
}
window.onclick = function (event) {
    var target = event.target;
    if (!target.classList.contains('.btn-restaurante')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('btn-s');
    if (botao) {
        botao.addEventListener('click', function () {
            window.location.href = 'choice.html';
        });
    }
});
