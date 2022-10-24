import {Serie} from './serie.js';
import { dataSeries } from './data.js';


let seriesTable: HTMLElement = document.getElementById("series")!;

let promedioNumero: HTMLElement = document.getElementById("promedio")!;

renderSeriesInTable(dataSeries);
calcularPromedioTemporadas(dataSeries);


function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style="font-weight: bold;">${c.id}</td>
                             <td>${c.name}</td>
                             <td>${c.channel}</td>
                             <td>${c.seasons}</td>`;
      seriesTable.appendChild(trElement);
    });
  }

  //let btnSerie: HTMLElement = document.getElementById("boton_serie")!;
  //btnSerie.onclick = muestraAlerta(1);
    
//   function muestraAlerta(numero: number) {
//     console.log(numero);
//   }

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


