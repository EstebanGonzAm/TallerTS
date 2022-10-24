import { dataSeries } from './data.js';
var seriesTable = document.getElementById("series");
var promedioNumero = document.getElementById("promedio");
renderSeriesInTable(dataSeries);
calcularPromedioTemporadas(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold;\">".concat(c.id, "</td>\n                             <td>").concat(c.name, "</td>\n                             <td>").concat(c.channel, "</td>\n                             <td>").concat(c.seasons, "</td>");
        seriesTable.appendChild(trElement);
    });
}
//let btnSerie: HTMLElement = document.getElementById("boton_serie")!;
//btnSerie.onclick = muestraAlerta(1);
//   function muestraAlerta(numero: number) {
//     console.log(numero);
//   }
function calcularPromedioTemporadas(series) {
    var promedio = 0;
    var numSeries = series.length;
    series.forEach(function (c) {
        promedio += c.seasons;
    });
    var trElement = document.createElement("tr");
    promedio = promedio / numSeries;
    console.log(promedio);
    trElement.innerHTML = "<td> Seasons average: ".concat(promedio, "</td>");
    promedioNumero.appendChild(trElement);
}
