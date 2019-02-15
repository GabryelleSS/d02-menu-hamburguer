const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenuHamburguer = document.querySelector('.nav-menuHamburguer');

const ativarBotao = function(){
    navMenuHamburguer.classList.toggle('.nav-menuHamburguer');
    navMenuHamburguer.classList.toggle('abrirMenuHamburguer')
}

menuHamburguer.onclick = ativarBotao;

