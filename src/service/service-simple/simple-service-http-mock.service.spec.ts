import { TestBed } from '@angular/core/testing';

import { SimpleServiceHttpMockService } from './simple-service-http-mock.service';

describe('SimpleServiceHttpMockService', () => {
  let service: SimpleServiceHttpMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleServiceHttpMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
