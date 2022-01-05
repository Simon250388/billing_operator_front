import { Component, OnInit } from '@angular/core';
import { MeterHistory } from '../../store/models/meter-history';
import { Location } from '@angular/common';

@Component({
  selector: 'app-meter-history',
  templateUrl: './meter-history.component.html',
  styleUrls: ['./meter-history.component.css']
})
export class MeterHistoryComponent implements OnInit {

  items: MeterHistory[] = [];

  displayedColumns = ['period', 'meter']

  constructor(
    private location: Location) {
  }

  ngOnInit(): void {
    
  }

  getMeterPresent() {
    return "";
  }

  getAccountingPointPresent() {
    return "";
  }

  backLocation() {
    this.location.back();
  }

}
