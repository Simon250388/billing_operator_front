import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DifferentiationTypeHistory } from '../model/differentiation-type-history';
import { DifferentiationTypeHistoryStoreService } from '../service/differentiation-type-history/differentiation-type-history-store.service';
import { DifferentiationTypeStoreService } from '../service/differentiation-type/differentiation-type-store.service';
import { MeterStoreService } from '../service/meter/meter-store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-differentiation-type-history',
  templateUrl: './differentiation-type-history.component.html',
  styleUrls: ['./differentiation-type-history.component.css']
})
export class DifferentiationTypeHistoryComponent implements OnInit {

  private meterId: number;

  items: Observable<DifferentiationTypeHistory[]>;

  displayedColumns = ['period', 'differentiationType']

  constructor(
    private meterStore: MeterStoreService,
    private differentiationTypeStore: DifferentiationTypeStoreService,
    private differentiationTypeHistoryStore: DifferentiationTypeHistoryStoreService,
    private location: Location,
    private router: ActivatedRoute) {
    this.differentiationTypeHistoryStore.load();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.meterId = Number.parseInt(params.get('id'));
      this.items = this.differentiationTypeHistoryStore.items.pipe(
        map(items => items.filter(row => row.meterId == this.meterId))
      );
    });
  }

  getMeterPresent(id: number) {
    return this.meterStore.getPresent(id);
  }

  getDifferentiationTypePresent(id: number) {
    return this.differentiationTypeStore.getPresent(id);
  }

  backLocation(): void {
    this.location.back();
  }
}
