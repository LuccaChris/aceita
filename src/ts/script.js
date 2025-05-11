var botaoNao = document.querySelector('.btn-n');
botaoNao === null || botaoNao === void 0 ? void 0 : botaoNao.addEventListener('mouseenter', function () {
    botaoNao.style.transition = 'none';
    botaoNao.style.position = 'absolute';
    var maxX = window.innerWidth - botaoNao.offsetWidth;
    var maxY = window.innerHeight - botaoNao.offsetHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    botaoNao.style.left = "".concat(randomX, "px");
    botaoNao.style.top = "".concat(randomY, "px");
});
// Mostra/esconde dropdowns personalizados
function toggleDropdown(id) {
    var allMenus = document.querySelectorAll('.dropdown-content');
    allMenus.forEach(function (menu) {
        if (menu.id === id) {
            menu.classList.toggle('show');
        }
        else {
            menu.classList.remove('show');
        }
    });
}
// Torna acessível globalmente caso use onclick no HTML
window.toggleDropdown = toggleDropdown;
// Fecha dropdowns ao clicar fora
window.addEventListener('click', function (event) {
    var target = event.target;
    if (!target.closest('.dropdown')) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (drop) { return drop.classList.remove('show'); });
    }
});
// Botão "Sim" leva para outra página
document.addEventListener('DOMContentLoaded', function () {
    var botaoSim = document.getElementById('btn-s');
    botaoSim === null || botaoSim === void 0 ? void 0 : botaoSim.addEventListener('click', function () {
        window.location.href = 'choice.html';
    });
    // Integração com WhatsApp
    var links = document.querySelectorAll('.whatsapp-link');
    var inputData = document.getElementById('calendario');
    var numero = '5511981242403';
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var filme = link.getAttribute('data-filme');
            var local = link.getAttribute('data-local');
            var dataSelecionada = (inputData === null || inputData === void 0 ? void 0 : inputData.value) || 'Data não selecionada';
            var mensagem = 'Aceito: ✔️\n';
            if (filme) {
                mensagem += "Cineminha: \uD83D\uDCFD\uFE0F\nFilminho: ".concat(filme, "\n");
            }
            else if (local) {
                mensagem += "Local: ".concat(local, "\n");
            }
            mensagem += "Data: ".concat(dataSelecionada);
            var url = "https://wa.me/".concat(numero, "?text=").concat(encodeURIComponent(mensagem));
            window.open(url, '_blank');
        });
    });
    var dropdownButtons = document.querySelectorAll('.btn-cine, .btn-restaurante');
    dropdownButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetId = btn.getAttribute('data-target');
            if (targetId)
                toggleDropdown(targetId);
        });
    });
});
