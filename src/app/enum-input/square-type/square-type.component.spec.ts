import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SquareTypeInputComponent} from './square-type.component';

describe('SquareTypeComponent', () => {
  let component: SquareTypeInputComponent;
  let fixture: ComponentFixture<SquareTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquareTypeInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
