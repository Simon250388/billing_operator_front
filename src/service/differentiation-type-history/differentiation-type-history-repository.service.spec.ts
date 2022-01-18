import { TestBed, inject } from '@angular/core/testing';
import { DifferentiationTypeHistoryRepositoryService } from './differentiation-type-history-repository.service';

describe('Service: DifferentiationTypeHistoryRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DifferentiationTypeHistoryRepositoryService]
    });
  });

  it('should ...', inject([DifferentiationTypeHistoryRepositoryService], (service: DifferentiationTypeHistoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
