import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";


@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit {

  constructor() { }

  ngOnInit() {

/*     var ctx = document.getElementById("chart_pie");
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Enojo', 'Satisfacción', 'Felicidad',
        ],
        datasets: [{
          data: [10, 20, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 2
        }]
      },
      options: {


      }
    }); */


  }

}
