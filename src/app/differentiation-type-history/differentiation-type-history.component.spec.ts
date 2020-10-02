import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiationTypeHistoryComponent } from './differentiation-type-history.component';

describe('DifferentiationTypeHistoryComponent', () => {
  let component: DifferentiationTypeHistoryComponent;
  let fixture: ComponentFixture<DifferentiationTypeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentiationTypeHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiationTypeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
