import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountingPointActive } from 'src/store/models/accounting-point-active.model';
import { IAccountingPointHttpService } from './accounting-point.http.factory';

export class AccountingPointHttpService implements IAccountingPointHttpService {
  load(): Observable<IAccountingPointActive[]> {
    throw new Error('Method not implemented.');
  }
  protected apiDomen: string = 'building';

  constructor(private http: HttpClient) { }
}
