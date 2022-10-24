import { dataSeries } from './data.js';
var seriesTable = document.getElementById("series");
var ids = document.getElementById("ids");
var tarjeta = document.getElementById("tarjeta");
var nombre = document.getElementById("nombre");
var canales = document.getElementById("channel");
var seasons = document.getElementById("seasons");
var promedioNumero = document.getElementById("promedio");
var boton_serie = document.getElementById('nombre');
renderSeriesInTable(dataSeries);
calcularPromedioTemporadas(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold;\">".concat(c.id, "</td>");
        var btnElement = document.createElement("tr");
        btnElement.onclick = function () { return mostrarTarjeta(c); };
        btnElement.innerHTML = "<td>".concat(c.name, "</td>");
        var trElement3 = document.createElement("tr");
        trElement3.innerHTML = "<td>".concat(c.channel, "</td>");
        var trElement4 = document.createElement("tr");
        trElement4.innerHTML = "<td>".concat(c.seasons, "</td>");
        ids.appendChild(trElement);
        nombre.appendChild(btnElement);
        canales.appendChild(trElement3);
        seasons.appendChild(trElement4);
    });
}
function mostrarTarjeta(serie) {
    var colInfo = document.getElementById("tarjeta");
    var cardAc = document.getElementById("cardId");
    if (cardAc != null) {
        colInfo.removeChild(cardAc);
    }
    var cardElement = document.createElement("div");
    var cardBody = document.createElement("div");
    cardElement.className = "card";
    cardElement.id = "cardId";
    cardElement.setAttribute("style", "width: 18rem;");
    cardBody.className = "card-body";
    cardElement.innerHTML = "<img class=\"card-img-top\" src=".concat(serie.image, ">");
    cardBody.innerHTML = "<h4 class=\"card-title\"> ".concat(serie.name, " </h4>\n                          <p class=\"card-text\"> ").concat(serie.description, " </p>\n                          <a href= ").concat(serie.link, "> ").concat(serie.link, " </a>");
    cardElement.appendChild(cardBody);
    colInfo.appendChild(cardElement);
}
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
