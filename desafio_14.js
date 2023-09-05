let hamburguer = document.getElementById('hamburguer');
let itens_menu = document.getElementById('itens_menu');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    if (itens_menu.style.display == 'block') {
        itens_menu.classList.remove('show');
    } else {
        itens_menu.classList.toggle('show');
    }
}
