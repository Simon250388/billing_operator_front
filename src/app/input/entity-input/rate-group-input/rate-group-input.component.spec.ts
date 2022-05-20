import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateGroupInputComponent } from './rate-group-input.component';

describe('RateGroupInputComponent', () => {
  let component: RateGroupInputComponent;
  let fixture: ComponentFixture<RateGroupInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateGroupInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateGroupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
