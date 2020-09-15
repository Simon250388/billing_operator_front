import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConnectorComponent } from './service-connector.component';

describe('ServiceConnectorComponent', () => {
  let component: ServiceConnectorComponent;
  let fixture: ComponentFixture<ServiceConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
