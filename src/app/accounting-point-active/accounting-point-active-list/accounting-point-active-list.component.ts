import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DifferentiationTypeChangeComponent } from 'src/app/change-value/differentiation-type-change/differentiation-type-change.component';
import { ProviderChangeComponent } from 'src/app/change-value/provider-change/provider-change.component';
import { SimpleNumberChangeComponent } from 'src/app/change-value/simple-number-change/simple-number-change.component';
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

  items: Observable<AccountingPointActive[]>;

  constructor(
    private dialog: MatDialog,
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

    this.items = this.cutomerNavigationService.currentCustomer.pipe(
      map(customer => {
        if (customer?.accountingPoint) {
          return customer.accountingPoint;
        }
        return [];
      })
    );
  }

  presentAccountingPoint(id: number): Observable<string> {
    return this.accountingPointStore.getPresent(id);
  }

  presentService(id: number): Observable<string> {
    return this.serviceStore.getPresent(id);
  }

  presentProvider(id: number): Observable<string> {
    return this.providerStore.getPresent(id);
  }

  presentMeter(id: number): Observable<string> {
    return this.meterStore.getPresent(id);
  }

  presentDifferentiationType(id: number): Observable<string> {
    return this.differentiationTypeStore.getPresent(id);
  }

  showProviderDialog(item: AccountingPointActive): void {

    const dialogRef = this.dialog.open(ProviderChangeComponent, {
      data: item.providerId
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        item.providerId = result;
      }
    });
  }

  showDifferentiationTypeChangeDialog(item: AccountingPointActive): void {
    const dialogRef = this.dialog.open(DifferentiationTypeChangeComponent, {
      data: item.differentiationTypeId
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        item.differentiationTypeId = result;
      }
    });
  }

  showMeterValueChangeDialog(item: AccountingPointActive): void {

    const dialogRef = this.dialog.open(SimpleNumberChangeComponent, {
      data: item.lastMeterValue
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        item.lastMeterValue = result;
      }
    });
  }

}
