import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConnectorAddComponent } from './service-connector-add.component';

describe('ServiceConnectorAddComponent', () => {
  let component: ServiceConnectorAddComponent;
  let fixture: ComponentFixture<ServiceConnectorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConnectorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConnectorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
