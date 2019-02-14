const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenuHamburguer = document.querySelector('.nav-menuHamburguer');

const ativarBotao = function(){
const navMenuHamburguer = document.querySelector('.nav-menuHamburguer');
    navMenuHamburguer.classList.toggle('abrirMenuHamburguer')
}

menuHamburguer.onclick = ativarBotao;

