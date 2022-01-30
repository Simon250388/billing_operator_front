import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPointAddFormComponent } from './accounting-point-add-form.component';

describe('AccountingPointAddComponent', () => {
  let component: AccountingPointAddFormComponent;
  let fixture: ComponentFixture<AccountingPointAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingPointAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
