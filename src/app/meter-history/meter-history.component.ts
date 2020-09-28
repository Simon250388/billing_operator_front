import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeterHistory } from '../model/meter-history';
import { AccountingPointStoreService } from '../service/accounting-point/accounting-point-store.service';
import { MeterStoreService } from '../service/meter/meter-store.service';
import { Location } from '@angular/common';
import { MeterHistoryStoreService } from '../service/meter-history/meter-history-store.service';

@Component({
  selector: 'app-meter-history',
  templateUrl: './meter-history.component.html',
  styleUrls: ['./meter-history.component.css']
})
export class MeterHistoryComponent implements OnInit {

  private accountigPointId: number;

  items: Observable<MeterHistory[]>;

  displayedColumns = ['period', 'meter']

  constructor(
    private accountingPointStore: AccountingPointStoreService,
    private meterStore: MeterStoreService,
    private providerHistoryStore: MeterHistoryStoreService,
    private location: Location,
    private router: ActivatedRoute) {
    this.providerHistoryStore.load();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.accountigPointId = Number.parseInt(params.get('id'));
      this.items = this.providerHistoryStore.items.pipe(
        map(items => items.filter(row => row.accountigPointId == this.accountigPointId))
      );
    });
  }

  getMeterPresent(id: number) {
    return this.meterStore.getPresent(id);
  }

  getAccountingPointPresent(id: number) {
    return this.accountingPointStore.getPresent(id);
  }

  backLocation() {
    this.location.back();
  }

}
