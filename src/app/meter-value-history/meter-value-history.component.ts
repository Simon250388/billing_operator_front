import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MeterValueHistory } from '../../store/models/meter-value-history';

@Component({
  selector: 'app-meter-value-history',
  templateUrl: './meter-value-history.component.html',
  styleUrls: ['./meter-value-history.component.css']
})
export class MeterValueHistoryComponent implements OnInit {


  items: MeterValueHistory[] = [];

  displayedColumns = ['period', 'rateZone']

  constructor(
    private location: Location) {
  }

  ngOnInit(): void { }

  getRateZonePresent() {
    return "";
  }

  getAccountingPointPresent() {
    return "";
  }

  getMeterPresent() {
    return "";
  }

  backLocation(): void {
    this.location.back();
  }
}
