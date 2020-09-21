import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPointServiceAddComponent } from './accounting-point-service-add.component';

describe('AccountingPointServiceAddComponent', () => {
  let component: AccountingPointServiceAddComponent;
  let fixture: ComponentFixture<AccountingPointServiceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingPointServiceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
