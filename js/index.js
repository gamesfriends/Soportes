const tableToFill = document.querySelector('.tableData');

const supportFields = ["ID", "DATE", "CLIENT", "SERIE", "SUPPORT", "ORDER", "TYPE OF JOB", "FINALIZED", "TIME", "WATCH"];

fetch("/Soportes/js/src/js.txt")
    .then(res => res.json())
    .then(res => {
        let fragment = `<tr class="tableData-row">`;
        for (const posField in supportFields) {
            fragment += `<th class="tableData-th${posField} borderRow tableThsH">${supportFields[posField]}</th>`;
        }
        fragment += `</tr>`;
        
        for (const fieldArray of res) {
            fragment += `
                <tr class="tableData-row">
                    <td class="tabledata-cell borderRow center">${fieldArray.id}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.fecha}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.cliente}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.nserie}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.nsoporte}</td>
                    <td class="tabledata-cell borderRow">${fieldArray.npedido}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.tipotrabajo}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.finalizado}</td>
                    <td class="tabledata-cell borderRow center">${fieldArray.hora}</td>
                    <td class="tabledata-cell borderRow center"><a href="url.html#sop=${fieldArray.id}">...</a></td>
                </tr>
            `
        }
        tableToFill.innerHTML = fragment;
    });
