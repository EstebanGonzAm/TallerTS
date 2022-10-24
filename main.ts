import {Serie} from './serie.js';
import { dataSeries } from './data.js';


let seriesTable: HTMLElement = document.getElementById("series")!;

let ids: HTMLElement = document.getElementById("ids")!;

let tarjeta: HTMLElement = document.getElementById("tarjeta")!;

let nombre: HTMLElement = document.getElementById("nombre")!;

let canales: HTMLElement = document.getElementById("channel")!;

let seasons: HTMLElement = document.getElementById("seasons")!;

let promedioNumero: HTMLElement = document.getElementById("promedio")!;

const boton_serie = document.getElementById('nombre')!;

renderSeriesInTable(dataSeries);
calcularPromedioTemporadas(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td style="font-weight: bold;">${c.id}</td>`;
        const btnElement = document.createElement("tr");
          btnElement.onclick = () => mostrarTarjeta(c);
          btnElement.innerHTML=`<td>${c.name}</td>`;
        let trElement3 = document.createElement("tr");
        trElement3.innerHTML = `<td>${c.channel}</td>`;
        let trElement4 = document.createElement("tr");
        trElement4.innerHTML = `<td>${c.seasons}</td>`;
      ids.appendChild(trElement);
      nombre.appendChild(btnElement);
      canales.appendChild(trElement3);
      seasons.appendChild(trElement4);
    });
  }


  function mostrarTarjeta(serie: Serie): void{

    let colInfo: HTMLElement = document.getElementById("tarjeta")!;
    let cardAc = document.getElementById("cardId");
  
    if (cardAc != null){
      colInfo.removeChild(cardAc);
    }
    
    let cardElement: HTMLElement = document.createElement("div");
    let cardBody: HTMLElement = document.createElement("div");
  
    cardElement.className = "card";
    cardElement.id = "cardId"
    cardElement.setAttribute("style", "width: 18rem;");
    cardBody.className = "card-body";
    cardElement.innerHTML = `<img class="card-img-top" src=${serie.image}>`;
    cardBody.innerHTML = `<h4 class="card-title"> ${serie.name} </h4>
                          <p class="card-text"> ${serie.description} </p>
                          <a href= ${serie.link}> ${serie.link} </a>`;
  
    cardElement.appendChild(cardBody);
    colInfo.appendChild(cardElement);

  }
  
  function calcularPromedioTemporadas(series: Serie[]): void{
      let promedio = 0;
      let numSeries = series.length;
      series.forEach(c=> {
          promedio+= c.seasons
        })
      let trElement = document.createElement("tr");
      promedio = promedio/numSeries;
      console.log(promedio);
      trElement.innerHTML = `<td> Seasons average: ${promedio}</td>`;
      promedioNumero.appendChild(trElement);
  }


