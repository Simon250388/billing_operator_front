import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareRoomAddComponent } from './square-room-add.component';

describe('SquareRoomAddComponent', () => {
  let component: SquareRoomAddComponent;
  let fixture: ComponentFixture<SquareRoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareRoomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
