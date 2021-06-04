const valores = window.location.hash;
const cntDatos = document.getElementById("datos")

let tamString = valores.length;
let resultado = valores.substring(5, tamString);

fetch("/Soportes/js/src/js.txt")
    .then(res => res.json())
    .then(res => {
        let fragment;
        for (const fieldArray of res) {
            if (fieldArray.id == resultado) {
                fragment = `
                <p class="text">ID: ${fieldArray.id}</p>
                <p class="text">FECHA: ${fieldArray.fecha}</p>
                <p class="text">CLIENTE: ${fieldArray.cliente}</p>
                <p class="text">NUMERO DE SERIE: ${fieldArray.nserie}</p>
                <p class="text">NUMERO DE SOPRTE: ${fieldArray.nsoporte}</p>
                <p class="text">NUMERO DE PEDIDO: ${fieldArray.npedido}</p>
                <p class="text">TIPO DE TRABAJO: ${fieldArray.tipotrabajo}</p>
                <p class="text">¿FINALIZADO?: ${fieldArray.finalizado}</p>
                <p class="text">HORA: ${fieldArray.hora}</p>
                `;
            }
        }
        cntDatos.innerHTML = fragment;
    });

fetch("/Soportes/js/src/jsObs.txt")
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let fragment;
        for (const fieldArray of res) {
            if (fieldArray.id == resultado) {
                fragment = `
                <p class="text">OBSERVACIONES: ${fieldArray.obs}</p>
                `;
            }
        }
        cntDatos.innerHTML += fragment;
    });