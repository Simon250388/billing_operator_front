import { TestBed } from '@angular/core/testing';

import { AccountinPointHttpMockService } from './accounting-point.http.mock.service';

describe('AccountinPointHttpMockService', () => {
  let service: AccountinPointHttpMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountinPointHttpMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
