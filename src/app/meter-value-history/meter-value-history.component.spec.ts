import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterValueHistoryComponent } from './meter-value-history.component';

describe('MeterValueHistoryComponent', () => {
  let component: MeterValueHistoryComponent;
  let fixture: ComponentFixture<MeterValueHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterValueHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterValueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
