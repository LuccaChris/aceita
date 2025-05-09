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