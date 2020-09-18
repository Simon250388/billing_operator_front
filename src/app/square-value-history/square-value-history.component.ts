import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SquareValueHistoryStoreService } from '../service/square-value-history/square-value-history-store.service';
import { Observable } from 'rxjs';
import { SquareValueHistory } from '../model/square-value-history';
import { SquareTypeStoreService } from '../service/square-type/square-type-store.service';

@Component({
  selector: 'app-square-value-history',
  templateUrl: './square-value-history.component.html',
  styleUrls: ['./square-value-history.component.css']
})
export class SquareValueHistoryComponent {

  private keyRoomId: number;

  items: Observable<SquareValueHistory[]>;

  displayedColumns = ['period', 'squareType', 'value']

  constructor(
    private squareValueHistoryStore: SquareValueHistoryStoreService,
    private squareTypeStore: SquareTypeStoreService,
    private location: Location) {
    this.squareValueHistoryStore.load();
  }

  getSquareTypePresent(id: number) {
    this.squareTypeStore.getPresent(id);
  }

  backLocation(): void {
    this.location.back();
  }
}
