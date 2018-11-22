const menuHambuguer = document.querySelector ('.menu-hamburguer');
const navMobile = document.querySelector ('.filtros-mobile');

menuHambuguer.onclick = () => {
    menuHambuguer.classList.toggle('ativo');
    navMobile.classList.toggle('ativo');
}

const cartao = document.querySelector ('.cartao');

const 