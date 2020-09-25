/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingPointActive.repositoryService } from './accounting-point-active.repository.service';

describe('Service: AccountingPointActive.repository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointActive.repositoryService]
    });
  });

  it('should ...', inject([AccountingPointActive.repositoryService], (service: AccountingPointActive.repositoryService) => {
    expect(service).toBeTruthy();
  }));
});
