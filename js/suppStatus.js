const tableToFill = document.querySelector('.tableData');

const supportFields = ["SUPPORT", "STATE"];

fetch("/Soportes/js/src/jsState.txt")
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
                    <td class="tabledata-cell borderRow center">${fieldArray.nsoporte}</td>
                    <td class="tabledata-cell borderRow">${fieldArray.des}</td>
                </tr>
            `
        }
        tableToFill.innerHTML = fragment;
    });
