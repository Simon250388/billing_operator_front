import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRoomListComponent } from './key-room-list.component';

describe('KeyRoomComponent', () => {
  let component: KeyRoomListComponent;
  let fixture: ComponentFixture<KeyRoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRoomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
