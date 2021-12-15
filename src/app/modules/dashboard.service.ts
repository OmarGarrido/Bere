import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  bigChart() {
    // return [
    //   {
    //     data: [
    //       Math.round(Math.random() * 100),
    //       Math.round(Math.random() * 100),
    //       Math.round(Math.random() * 100),
    //       Math.round(Math.random() * 100),
    //       Math.round(Math.random() * 100),
    //       Math.round(Math.random() * 100),
    //     ],
    //   },
    // ];
    return [
      {
        name: 'Informatica',
        data: [
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
        ],
      },
      {
        name: 'Quimica',
        data: [
          Math.round(Math.random() * 20),
          Math.round(Math.random() * 20),
          Math.round(Math.random() * 20),
          Math.round(Math.random() * 20),
          Math.round(Math.random() * 20),
          Math.round(Math.random() * 20),
        ],
      },
      {
        name: 'Sistemas',
        data: [
          Math.round(Math.random() * 15),
          Math.round(Math.random() * 15),
          Math.round(Math.random() * 15),
          Math.round(Math.random() * 15),
          Math.round(Math.random() * 15),
          Math.round(Math.random() * 15),
        ],
      },
      {
        name: 'Contaduria',
        data: [
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10),
        ],
      },
      {
        name: 'Mecatronica',
        data: [
          Math.round(Math.random() * 25),
          Math.round(Math.random() * 25),
          Math.round(Math.random() * 25),
          Math.round(Math.random() * 25),
          Math.round(Math.random() * 25),
          Math.round(Math.random() * 25),
        ],
      },
    ];
  }

  cards() {
    return [
      Math.round(Math.random() * 25),
      Math.round(Math.random() * 25),
      Math.round(Math.random() * 25),
      Math.round(Math.random() * 25),
      Math.round(Math.random() * 25),
    ];
  }

  pieChart() {
    return [
      {
        name: 'Informatica',
        y: 61.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'Gestion Empresarial',
        y: 11.84,
      },
      {
        name: 'Mecanica',
        y: 10.85,
      },
      {
        name: 'Mecatronica',
        y: 4.67,
      },
      {
        name: 'Contaduria',
        y: 4.18,
      },
      {
        name: 'Aeronautica',
        y: 1.64,
      },
      {
        name: 'Electronica',
        y: 1.6,
      },
    ];
  }
}
