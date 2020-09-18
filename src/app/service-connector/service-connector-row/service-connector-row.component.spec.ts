import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConnectorRowComponent } from './service-connector-row.component';

describe('ServiceConnectorRowComponent', () => {
  let component: ServiceConnectorRowComponent;
  let fixture: ComponentFixture<ServiceConnectorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConnectorRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConnectorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
