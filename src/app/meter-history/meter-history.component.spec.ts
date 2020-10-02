import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterHistoryComponent } from './meter-history.component';

describe('MeterHistoryComponent', () => {
  let component: MeterHistoryComponent;
  let fixture: ComponentFixture<MeterHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
