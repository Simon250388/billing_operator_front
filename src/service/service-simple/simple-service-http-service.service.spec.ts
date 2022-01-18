import {TestBed} from '@angular/core/testing';

import {SimpleServiceHttpService} from './simple-service-http-service.service';

describe('SimpleServiceHttpService', () => {
  let service: SimpleServiceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleServiceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
