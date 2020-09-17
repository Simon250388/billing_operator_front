import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareRoomRowComponent } from './square-room-row.component';

describe('SquareRoomRowComponent', () => {
  let component: SquareRoomRowComponent;
  let fixture: ComponentFixture<SquareRoomRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareRoomRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareRoomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
