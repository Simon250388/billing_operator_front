import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProviderHistory } from '../model/provider-history';
import { AccountingPointStoreService } from '../service/accounting-point/accounting-point-store.service';
import { ProviderHistoryStoreService } from '../service/provider-history/provider-history-store.service';
import { ProviderStoreService } from '../service/provider/provider-store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-provider-history',
  templateUrl: './provider-history.component.html',
  styleUrls: ['./provider-history.component.css']
})
export class ProviderHistoryComponent implements OnInit {

  private accountigPointId: number;

  items: Observable<ProviderHistory[]>;

  displayedColumns = ['period', 'provider']

  constructor(
    private accountingPointStore: AccountingPointStoreService,
    private providerStore: ProviderStoreService,
    private providerHistoryStore: ProviderHistoryStoreService,
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

  getProviderPresent(id: number) {
    return this.providerStore.getPresent(id);
  }

  getAccountingPointPresent(id: number) {
    return this.accountingPointStore.getPresent(id);
  }

  backLocation() {
    this.location.back();
  }

}
