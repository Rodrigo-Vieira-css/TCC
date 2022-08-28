function agenda() {
    const mes = document.querySelector('#mes');
    const esquerda = document.querySelector('#esquerda');
    const direita = document.querySelector('#direita');
    const fila1 = document.querySelector('.fila1');
    const fila2 = document.querySelector('.fila2');
    const fila3 = document.querySelector('.fila3');
    const fila4 = document.querySelector('.fila4');
    const fila5 = document.querySelector('.fila5');
    const data = new Date();
    const messes = data.getMonth() + 1;
    const ano = data.getFullYear();


    function getDiasMes(month, year) {
        month--;
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    function PrimeiraFila() {
        let dia = getDiasMes(messes + 1, ano)
        for (let i = 0; i < dia.length; i++) {
            if (dia[i] <= 7) {
                let a = document.createElement('a');
                a.setAttribute('class', 'date')
                let td = document.createElement('td');
                td.setAttribute('class', 'primeira-fila')
                let div = document.createElement('div');
                let p = document.createElement('p');
                p.innerHTML = `${dia[i]} `
                div.appendChild(p);
                td.appendChild(div);

                fila1.appendChild(td);
            }

        }

    }
    function SegundaFila() {
        let dia = getDiasMes(messes + 1, ano)
        for (let i = 0; i < dia.length; i++) {
            if (dia[i] >= 8 && dia[i] < 15) {
                let td = document.createElement('td');
                let div = document.createElement('div');
                div.setAttribute('class', 'segunda-fila')
                let p = document.createElement('p');
                p.innerHTML = `${dia[i]}`
                div.appendChild(p);
                td.appendChild(div);

                fila2.appendChild(td);
            }
        }

    }
    function TerceiraFila() {
        let dia = getDiasMes(messes + 1, ano)
        for (let i = 0; i < dia.length; i++) {
            if (dia[i] >= 15 && dia[i] < 22) {
                let td = document.createElement('td');
                let div = document.createElement('div');
                div.setAttribute('class', 'segunda-fila')
                let p = document.createElement('p');
                p.innerHTML = `${dia[i]}`
                div.appendChild(p);
                td.appendChild(div);
                fila3.appendChild(td);
            }
        }

    }
    function QuartaFila() {
        let dia = getDiasMes(messes + 1, ano)
        for (let i = 0; i < dia.length; i++) {
            if (dia[i] >= 22 && dia[i] < 29) {
                let td = document.createElement('td');
                let div = document.createElement('div');
                div.setAttribute('class', 'segunda-fila')
                let p = document.createElement('p');
                p.innerHTML = `${dia[i]}`
                div.appendChild(p);
                td.appendChild(div);
                fila4.appendChild(td);
            }
        }

    }
    function QuintaFila() {
        let dia = getDiasMes(messes + 1, ano)
        for (let i = 0; i < dia.length; i++) {
            if (dia[i] >= 29 && dia[i] < 32) {
                let td = document.createElement('td');
                let div = document.createElement('div');
                div.setAttribute('class', 'segunda-fila')
                let p = document.createElement('p');
                p.innerHTML = `${dia[i]}`
                div.appendChild(p);
                td.appendChild(div);
                fila5.appendChild(td);
            }
        }

    }

    esquerda.addEventListener('click', (e) => {

    })
    direita.addEventListener('click', (e) => {
        const el = e.target;
        e.preventDefault()
         console.log(teste)
        
         
    })
    data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });

    const teste = [" ", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    for (let a = 0; a <= 12; a++) {
        if (messes === a) {
            mes.innerHTML = `${teste[a]}`;
        }
    }

    PrimeiraFila();
    SegundaFila();
    TerceiraFila();
    QuartaFila();
    QuintaFila();

}
agenda(); 