import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceInputComponent} from './service-input.component';

describe('EntityInputComponent', () => {
  let component: ServiceInputComponent;
  let fixture: ComponentFixture<ServiceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
