import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountingPointItemComponent} from './accounting-point-item.component';

describe('AccountingPointItemComponent', () => {
  let component: AccountingPointItemComponent;
  let fixture: ComponentFixture<AccountingPointItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountingPointItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
