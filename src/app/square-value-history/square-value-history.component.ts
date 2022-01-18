import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {SquareValueHistory} from '../../store/models/square-value-history';


@Component({
  selector: 'app-square-value-history',
  templateUrl: './square-value-history.component.html',
  styleUrls: ['./square-value-history.component.css']
})
export class SquareValueHistoryComponent {

  private keyRoomId!: number;

  items!: Observable<SquareValueHistory[]>;

  displayedColumns = ['period', 'squareType', 'value']

  constructor(
    private location: Location) {
  }

  getSquareTypePresent(id: number): string {
    return "";
  }

  backLocation(): void {
    this.location.back();
  }
}
