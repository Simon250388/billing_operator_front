import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPointAddComponent } from './accounting-point-add.component';

describe('AccountingPointAddComponent', () => {
  let component: AccountingPointAddComponent;
  let fixture: ComponentFixture<AccountingPointAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingPointAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
