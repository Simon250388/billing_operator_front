import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderHistory } from '../../store/models/provider-history';


@Component({
  selector: 'app-provider-history',
  templateUrl: './provider-history.component.html',
  styleUrls: ['./provider-history.component.css']
})
export class ProviderHistoryComponent implements OnInit {

  private accountigPointId!: number;

  items!: Observable<ProviderHistory[]>;

  displayedColumns = ['period', 'provider']

  constructor() {

  }

  ngOnInit(): void {

  }

  getProviderPresent(id: number) {
    return "";
  }

  getAccountingPointPresent(id: number) {
    return "";
  }

  backLocation() {
    return "";
  }

}
