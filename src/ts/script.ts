const botaoNao = document.querySelector('.btn-n') as HTMLButtonElement;
botaoNao?.addEventListener('mouseenter', () => {
    botaoNao.style.transition = 'none';
    botaoNao.style.position = 'absolute';

    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = `${randomX}px`;
    botaoNao.style.top = `${randomY}px`;
});

// Mostra/esconde dropdowns personalizados
function toggleDropdown(id: string): void {
  const allMenus = document.querySelectorAll('.dropdown-content');
  allMenus.forEach((menu) => {
    if ((menu as HTMLElement).id === id) {
      menu.classList.toggle('show');
    } else {
      menu.classList.remove('show');
    }
  });
}

// Torna acessível globalmente caso use onclick no HTML
(window as any).toggleDropdown = toggleDropdown;

// Fecha dropdowns ao clicar fora
window.addEventListener('click', (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (!target.closest('.dropdown')) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((drop) => drop.classList.remove('show'));
  }
});

// Botão "Sim" leva para outra página
document.addEventListener('DOMContentLoaded', () => {
    const botaoSim = document.getElementById('btn-s') as HTMLButtonElement;
    botaoSim?.addEventListener('click', () => {
        window.location.href = 'choice.html';
    });

    // Integração com WhatsApp
    const links = document.querySelectorAll('.whatsapp-link');
    const inputData = document.getElementById('calendario') as HTMLInputElement;
    const numero = '5511981242403'; 

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const filme = link.getAttribute('data-filme');
            const local = link.getAttribute('data-local');
            const dataSelecionada = inputData?.value || 'Data não selecionada';

            let mensagem = 'Aceito: ✔️\n';

            if (filme) {
                mensagem += `Cineminha: 📽️\nFilminho: ${filme}\n`;
            } else if (local) {
                mensagem += `Local: ${local}\n`;
            }

            mensagem += `Data: ${dataSelecionada}`;
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    });

      const dropdownButtons = document.querySelectorAll<HTMLButtonElement>('.btn-cine, .btn-restaurante');
  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (targetId) toggleDropdown(targetId);
    });
  });

});
