/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeyRoomHttMockService } from './key-room-http.mock.service';

describe('Service: KeyRoomHttMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyRoomHttMockService]
    });
  });

  it('should ...', inject([KeyRoomHttMockService], (service: KeyRoomHttMockService) => {
    expect(service).toBeTruthy();
  }));
});
