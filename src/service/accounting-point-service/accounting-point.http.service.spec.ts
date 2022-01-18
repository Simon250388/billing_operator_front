/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {AccountingPointHttpService} from './accounting-point.http.service';

describe('Service: AccountingPointServiceRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointHttpService]
    });
  });

  it('should ...', inject([AccountingPointHttpService], (service: AccountingPointHttpService) => {
    expect(service).toBeTruthy();
  }));
});
