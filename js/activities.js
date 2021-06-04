const tableToFill = document.querySelector('.tableData');

const supportFields = ["ID", "SUPPORT", "DATE", "TIME", "DESCRIPTION", "STATE", "TYPE OF JOB"];

fetch("/Soportes/js/src/jsAct.txt")
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
                <td class="tabledata-cell borderRow center">${fieldArray.nsoporte}</td>
                <td class="tabledata-cell borderRow center">${fieldArray.fecha}</td>
                <td class="tabledata-cell borderRow center">${fieldArray.hora}</td>
                <td class="tabledata-cell borderRow">${fieldArray.des}</td>
                <td class="tabledata-cell borderRow center">${fieldArray.estado}</td>
                <td class="tabledata-cell borderRow center">${fieldArray.tipotrabajo}</td>
                </tr>
            `
        }
        tableToFill.innerHTML = fragment;
    });
