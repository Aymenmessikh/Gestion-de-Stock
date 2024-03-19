import { Component, OnInit } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries
} from "ng-apexcharts";
import { TopClient } from "src/app/Classes/TopClient";
import { ClientService } from "src/app/Service/Client/client.service";

type ApexXAxis = {
  categories: string[];
  labels: {
    style: {
      colors: string[];
      fontSize: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};


@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit{
  serie:ApexNonAxisChartSeries=[]
  loading: boolean = true;
  Details:ApexChart= {
    type:"pie",
    toolbar:{
      show:true
    },
    height:600,
    width:600
  }
  titel:ApexTitleSubtitle={
    text:"Les Plus Gros Clients",
    align:"left"
  }

  public label: string[] = [];

  public colors: string[] = [
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#546E7A",
    "#26a69a",
    "#26a74C",
    "#26a87e",
    "#D10CE8"
  ];

  public info: ApexChart = {
    type: "bar",
    toolbar: {
      show: true
    },
    height: 600,
    width: 600
  };

  constructor(private service:ClientService) {
  }
  public title: ApexTitleSubtitle = {
    text: "Prouduits Les Plus Vendus",
    align: "left"
  };

  public data: ApexAxisChartSeries = [
    {
      name: "distibuted",
      data: [] ,
    }
  ];

  public xaxis: ApexXAxis = {
    categories: [],
    labels: {
      style: {
        colors:[
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          "#26a69a",
          "#D10CE8"
        ],
        fontSize: "12px"
      }
    },
  };
  public topClients: TopClient[] = [];

  public getBestClient() {
    this.service.getbestClient().subscribe(response => {
      this.topClients = response;
      this.xaxis.categories = this.topClients.map(client => client.nom);
      console.log(this.xaxis.categories)
      this.label= this.topClients.map(client => client.nom);
      console.log(this.label)
      this.data[0].data = this.topClients.map(client => client.montans);
      this.serie = this.topClients.map(client => client.montans);
      console.log(this.topClients);
      this.loading = false;
    });
  }
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 10000); // Délai de 10 secondes avant de désactiver le chargement
    this.getBestClient();
  }
}
