import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Salon: string;
  position: number;
  Contagios: number;
  Carrera:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Salon: 'S-105', Contagios: Math.round(Math.random() * 25), Carrera:'Informatica' },
  { position: 2, Salon: 'S-101', Contagios: Math.round(Math.random() * 25), Carrera:'Informatica' },
  { position: 3, Salon: 'S-202', Contagios: Math.round(Math.random() * 25), Carrera:'Informatica' },
  { position: 4, Salon: 'Z-201', Contagios: Math.round(Math.random() * 25), Carrera:'Gestion Empresarial' },
  { position: 5, Salon: 'Z-106', Contagios: Math.round(Math.random() * 25), Carrera:'Gestion Empresarial' },
  { position: 6, Salon: 'M-108', Contagios: Math.round(Math.random() * 25), Carrera:'Mecanica' },
  { position: 9, Salon: 'Z-204', Contagios: Math.round(Math.random() * 25), Carrera:'Gestion Empresarial' },
  { position: 10, Salon: 'M-104', Contagios: Math.round(Math.random() * 25), Carrera:'Mecanica' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  // { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  // { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  // { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  // { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  // { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  // { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  // { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  // { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  // { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigChart: any;
  cards: any;
  cards2: any;
  cards3: any;
  pieChart: any;

  displayedColumns: string[] = ['position', 'Salon', 'Contagios','Carrera'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.cards2 = this.dashboardService.cards();
    this.cards3 = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
}
