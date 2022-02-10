/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {KeyRoomHttMockService} from './meter-room-http.mock.service';

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
