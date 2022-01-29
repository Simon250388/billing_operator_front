import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentKeyRoomComponent } from './current-key-room.component';

describe('CurrentKeyRoomComponent', () => {
  let component: CurrentKeyRoomComponent;
  let fixture: ComponentFixture<CurrentKeyRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentKeyRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentKeyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
