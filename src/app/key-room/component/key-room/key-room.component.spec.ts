import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRoomComponent } from './key-room.component';

describe('KeyRoomComponent', () => {
  let component: KeyRoomComponent;
  let fixture: ComponentFixture<KeyRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
