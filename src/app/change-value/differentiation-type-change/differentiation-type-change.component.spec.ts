import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiationTypeChangeComponent } from './differentiation-type-change.component';

describe('DifferentiationTypeChangeComponent', () => {
  let component: DifferentiationTypeChangeComponent;
  let fixture: ComponentFixture<DifferentiationTypeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentiationTypeChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiationTypeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
