const bars = document.querySelector('.barra');
const inative = document.querySelector('.inative');
const menu = document.querySelector('.sidebar');
const nv = document.querySelector('.nav');
const img = document.querySelector('#close');// selecionando o icone    

bars.addEventListener('click', (e) => {
    const el = e.target;
    e.preventDefault();
    fechar()
})
function fechar() {
    let img = document.querySelector('#close');// selecionando o icone    
    const menu = document.querySelector('.sidebar').style.display = "none";
}

function abrir() {
    img.setAttribute('class', 'las la-bars');//icone
    const menu = document.querySelector('.sidebar').style.display = "block";
}


















/* function fechar(v) { 
    let img = document.querySelector('#close');// selecionando o icone 
    if (v === true) {     
        img.setAttribute('class','las la-times'); // icone
        menu.classList.remove('sidebar'); //menu de opções
        menu.classList.add('close');//menu de opções
    } else if (v === false) {
        img.setAttribute('class','las la-bars');//icone
        menu.classList.remove('close');//menu de opções
        menu.classList.add('sidebar');// menu de opções 
    }
}*/ 