import { Component, OnInit } from '@angular/core';
import { AccountingPointActive } from 'src/app/model/accounting-point-active';
import { AccountingPointStoreService } from 'src/app/service/accounting-point/accounting-point-store.service';
import { CutomerNavigationService } from 'src/app/service/customer/cutomer-navigation.service';
import { DifferentiationTypeStoreService } from 'src/app/service/differentiation-type/differentiation-type-store.service';
import { MeterStoreService } from 'src/app/service/meter/meter-store.service';
import { ProviderStoreService } from 'src/app/service/provider/provider-store.service';
import { ServiceStoreService } from 'src/app/service/service/service-store.service';

@Component({
  selector: 'app-accounting-point-list',
  templateUrl: './accounting-point-active-list.component.html',
  styleUrls: ['./accounting-point-active-list.component.css']
})
export class AccountingPointActiveListComponent {

  items: AccountingPointActive[] = [];

  constructor(
    private accountingPointStore: AccountingPointStoreService,
    private serviceStore: ServiceStoreService,
    private providerStore: ProviderStoreService,
    private meterStore: MeterStoreService,
    private differentiationTypeStore: DifferentiationTypeStoreService,
    private cutomerNavigationService: CutomerNavigationService) {

    this.accountingPointStore.load();
    this.serviceStore.load();
    this.providerStore.load();
    this.meterStore.load();
    this.differentiationTypeStore.load();

    this.cutomerNavigationService.currentCustomer.subscribe(customer => {
      if (customer) {
        this.items = customer.accountingPoint;
      }
    });
  }

  presentAccountingPoint(id: number): string {
    return this.accountingPointStore.getPresent(id);
  }

  presentService(id: number): string {
    return this.serviceStore.getPresent(id);
  }

  presentProvider(id: number): string {
    return this.providerStore.getPresent(id);
  }

  presentMeter(id: number): string {
    return this.meterStore.getPresent(id);
  }

  presentDifferentiationType(id: number): string {
    return this.differentiationTypeStore.getPresent(id);
  }
}
