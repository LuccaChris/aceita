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
