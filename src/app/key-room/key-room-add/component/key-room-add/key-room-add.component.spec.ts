import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRoomAddComponent } from './key-room-add.component';

describe('ContractDetailsComponent', () => {
  let component: KeyRoomAddComponent;
  let fixture: ComponentFixture<KeyRoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRoomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
