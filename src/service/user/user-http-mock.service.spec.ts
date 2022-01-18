import { TestBed } from '@angular/core/testing';

import { UserHttpMockService } from './user-http-mock.service';

describe('UserHttpMockService', () => {
  let service: UserHttpMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttpMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
