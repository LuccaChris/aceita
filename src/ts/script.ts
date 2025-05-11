const botaoNao = document.querySelector('.btn-n') as HTMLButtonElement;
const botaoSim = document.querySelector('.btn-s') as HTMLButtonElement;

botaoNao.addEventListener('mouseenter', () => {
    botaoNao.style.transition = 'none';
    botaoNao.style.position = 'absolute';

    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = `${randomX}px`;
    botaoNao.style.top = `${randomY}px`;
}); 

function toggleDropdown(id: string): void {
    const allMenus: NodeListOf<HTMLElement> = document.querySelectorAll('.dropdown-content');

    allMenus.forEach((menu: HTMLElement) => {
        if (menu.id === id) {
            menu.classList.toggle('show');
        } else {
            menu.classList.remove('show'); // Fecha os outros
        }
    });
}


window.onclick = function (event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!target.classList.contains('.btn-restaurante')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i] as HTMLElement;
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-s') as HTMLButtonElement;

    if (botao) {
        botao.addEventListener('click', () => {
            window.location.href = 'choice.html';
        });
    }
});