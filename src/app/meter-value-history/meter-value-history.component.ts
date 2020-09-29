import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MeterValueHistoryStoreService } from '../service/meter-value-history/meter-value-history-store.service';
import { Location } from '@angular/common';
import { AccountingPointStoreService } from '../service/accounting-point/accounting-point-store.service';
import { MeterStoreService } from '../service/meter/meter-store.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { MeterValueHistory } from '../model/meter-value-history';

@Component({
  selector: 'app-meter-value-history',
  templateUrl: './meter-value-history.component.html',
  styleUrls: ['./meter-value-history.component.css']
})
export class MeterValueHistoryComponent implements OnInit {

  private meterId: number;

  items: Observable<MeterValueHistory[]>;

  displayedColumns = ['period', 'rateZone']

  constructor(
    private accountingPointStore: AccountingPointStoreService,
    private meterStore: MeterStoreService,
    private meteValueHistoryStore: MeterValueHistoryStoreService,
    private location: Location,
    private router: ActivatedRoute) {
    this.meteValueHistoryStore.load();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.meterId = Number.parseInt(params.get('id'));
      this.items = this.meteValueHistoryStore.items.pipe(
        map(items => items.filter(row => row.meterId == this.meterId))
      );
    });
  }

  getRateZonePresent(id: number) {
    return this.accountingPointStore.getPresent(id);
  }

  getAccountingPointPresent(id: number) {
    return this.meterStore.getPresent(id);
  }

  getMeterPresent(id: number) {
    return this.meterStore.getPresent(id);
  }

  backLocation(): void {
    this.location.back();
  }
}
