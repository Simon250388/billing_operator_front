import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {MeterModel} from "../../../../store/models/meter.model";

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css']
})
export class MeterListComponent implements OnInit {

  items: Observable<MeterModel[]> = of([
    {
      id: "someID",
      meterType: {
        id: "someId",
        present: "132"
      },
      location: {
        id: "someId",
        present: "Кухня"
      },
      differentiationType: {
        id: "SomeId",
        present: "3-х тарифный"
      },
      verificationDate: "01-01-2021",
      meterValueDate: "01-01-2021",
      currentMeterValues: [
        {zone: {id: "SOMEID", present: "Ночь"}, meterValue: 137580, avgVolume: 1000},
        {zone: {id: "SOMEID", present: "Полупик"}, meterValue: 137580, avgVolume: 1000},
        {zone: {id: "SOMEID", present: "Пик"}, meterValue: 137580, avgVolume: 1000}
      ]
    }
  ])

  ngOnInit(): void {
  }


}
