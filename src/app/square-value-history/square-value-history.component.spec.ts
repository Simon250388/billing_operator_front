import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareValueHistoryComponent } from './square-value-history.component';

describe('SquareValueHistoryComponent', () => {
  let component: SquareValueHistoryComponent;
  let fixture: ComponentFixture<SquareValueHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareValueHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareValueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
