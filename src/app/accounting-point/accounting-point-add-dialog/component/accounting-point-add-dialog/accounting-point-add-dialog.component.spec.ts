import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPointAddDialogComponent } from './accounting-point-add-dialog.component';

describe('AccountingPointAddDialogComponent', () => {
  let component: AccountingPointAddDialogComponent;
  let fixture: ComponentFixture<AccountingPointAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingPointAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
