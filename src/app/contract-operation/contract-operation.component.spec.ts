import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOperationComponent } from './contract-operation.component';

describe('ContractOperationComponent', () => {
  let component: ContractOperationComponent;
  let fixture: ComponentFixture<ContractOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
