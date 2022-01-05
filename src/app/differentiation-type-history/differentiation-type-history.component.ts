import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DifferentiationTypeHistory } from '../../store/models/differentiation-type-history';
import { Location } from '@angular/common';

@Component({
  selector: 'app-differentiation-type-history',
  templateUrl: './differentiation-type-history.component.html',
  styleUrls: ['./differentiation-type-history.component.css']
})
export class DifferentiationTypeHistoryComponent implements OnInit {

  private meterId!: number;

  items!: Observable<DifferentiationTypeHistory[]>;

  displayedColumns = ['period', 'differentiationType']

  constructor(private location: Location) {
  }

  ngOnInit(): void {

  }

  getMeterPresent(id: number) {
    return "";
  }

  getDifferentiationTypePresent(id: number) {
    return "";
  }

  backLocation(): void {
    this.location.back();
  }
}
