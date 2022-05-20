import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterItemComponent } from './meter-item.component';

describe('MeterItemComponent', () => {
  let component: MeterItemComponent;
  let fixture: ComponentFixture<MeterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
