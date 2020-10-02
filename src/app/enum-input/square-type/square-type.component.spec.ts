import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareTypeComponent } from './square-type.component';

describe('SquareTypeComponent', () => {
  let component: SquareTypeComponent;
  let fixture: ComponentFixture<SquareTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
