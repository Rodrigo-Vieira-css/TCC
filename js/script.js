function movSidebar() {
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
        ajustarFechar();
        bars.setAttribute('class', 'las la-bars');
        barra.addEventListener('click', () => {
            abrir()
        })
    }
    function abrir() {
        ajustarAbrir();
        bars.setAttribute('class', 'las la-times-circle');
        barra.addEventListener('click', () => {
            fechar();

        })
    }
    function ajustarAbrir() {
        sidebar.style.display = "block";
        bars.style.marginLeft = "1rem";
        title.style.marginLeft = ".5rem";
        title.style.paddingRight = "1rem";
        search.style.paddingRight = "";
    }
    function ajustarFechar() {
        sidebar.style.display = "none";
        bars.style.marginLeft = "-20rem";
        title.style.marginLeft = "-17rem";
        title.style.paddingRight = "10rem";
        search.style.paddingRight = "13rem";
    }

}
movSidebar();