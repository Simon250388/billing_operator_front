import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  service: string;
  debtBegin: number;
  calculate: number;
  payment: number;
  debtEnd: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {service: "Холодная вода", debtBegin: 100, calculate: 100, payment: 150, debtEnd: 50},
  {service: "Холодная вода 1", debtBegin: 100, calculate: 100, payment: 150, debtEnd: 50},
  {service: "Холодная вода 2", debtBegin: 100, calculate: 100, payment: 150, debtEnd: 50},
  {service: "Холодная вода 3", debtBegin: 100, calculate: 100, payment: 150, debtEnd: 50},
  {service: "Холодная вода 4", debtBegin: 100, calculate: 100, payment: 150, debtEnd: 50},
  {service: "Холодная вода 5", debtBegin: 100, calculate: 100, payment: 150, debtEnd: 50},
  
];


@Component({
  selector: 'app-CalcultaionList',
  templateUrl: './calcultaion-list.component.html',
  styleUrls: ['./calcultaion-list.component.css']
})
export class CalcultaionListComponent implements OnInit {

  displayedColumns: string[] = ['service', 'debtBegin', 'calculate', 'payment', 'debtEnd'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
