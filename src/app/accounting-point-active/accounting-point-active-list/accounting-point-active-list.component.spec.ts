import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPointActiveListComponent } from './accounting-point-active-list.component';

describe('AccountingPointActiveListComponent', () => {
  let component: AccountingPointActiveListComponent;
  let fixture: ComponentFixture<AccountingPointActiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingPointActiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
