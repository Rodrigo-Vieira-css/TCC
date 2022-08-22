const barra = document.querySelector('.barra');
const bars = document.querySelector('#close');
const title = document.querySelector('.title');
const sidebar = document.querySelector('.sidebar');
const search = document.querySelector('.search');

barra.addEventListener('click', (e) => {
    const el = e.target
    e.preventDefault();
    fechar();
});

function fechar() {
    sidebar.style.display = "none";
    title.setAttribute('class', 'title-ajust')
    bars.setAttribute('class', 'las la-bars');
    ajustar(true)
}
function abrir() {
    sidebar.style.display = "block";
    bars.setAttribute('class', 'las la-times');
}

function ajustar(n) {
    if (n === true) {
    bars.style.marginLeft = "-20rem";
    title.style.marginLeft = "-17rem";
    title.style.paddingRight ="10rem";  
    search.style.paddingRight = "13rem";
    bars.addEventListener('click', (e)=> {
       abrir();
    })
    } else if (n === false) {

    }
}