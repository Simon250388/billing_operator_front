import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRoomItemComponent } from './key-room-item.component';

describe('KeyRoomItemComponent', () => {
  let component: KeyRoomItemComponent;
  let fixture: ComponentFixture<KeyRoomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRoomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
