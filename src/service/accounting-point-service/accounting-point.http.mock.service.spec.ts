import { TestBed } from '@angular/core/testing';

import { AccountingPointHttpMockService } from './accounting-point.http.mock.service';

describe('AccountingPointHttpMockService', () => {
  let service: AccountingPointHttpMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountingPointHttpMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
