import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPointServiceListComponent } from './accounting-point-service-list.component';

describe('AccountingPointServiceListComponent', () => {
  let component: AccountingPointServiceListComponent;
  let fixture: ComponentFixture<AccountingPointServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingPointServiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
