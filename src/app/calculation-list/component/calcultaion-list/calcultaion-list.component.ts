import { Component, OnInit } from '@angular/core';
import { SimpleRef } from 'src/store/models/simple-ref.model';


export interface PeriodicElement {
  service: string;
  debtBegin: number;
  calculate: number;
  payment: number;
  debtEnd: number;
}

const ELEMENT_DATA: CalculationItem[] = [
  {
    month: '2022-01-01',
    details: [
      {
        provider: { id: "someID", present: "Газпром" },
        service: { id: "someID", present: "Холодная вода" },
        debtBegin: 200,
        calculate: 100,
        payment: 100,
        debtEnd: 100
      } as CalculationByService
    ],
    attachments: []
  }
];


@Component({
  selector: 'app-CalcultaionList',
  templateUrl: './calcultaion-list.component.html',
  styleUrls: ['./calcultaion-list.component.css']
})
export class CalcultaionListComponent {
  items: CalculationItem[] = ELEMENT_DATA
}

export interface CalculationAttachment {
  provider: string
}

export interface CalculationItem {
  month: string,
  attachments: CalculationAttachment[]
  details: CalculationByService[]
}

export interface CalculationByService {
  provider: SimpleRef,
  service: SimpleRef,
  debtBegin: number,
  calculate: number,
  payment: number,
  debtEnd: number
}
