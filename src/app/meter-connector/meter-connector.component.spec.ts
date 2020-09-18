import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterConnectorComponent } from './meter-connector.component';

describe('MeterConnectorComponent', () => {
  let component: MeterConnectorComponent;
  let fixture: ComponentFixture<MeterConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
