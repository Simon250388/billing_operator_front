import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionOfUseInputComponent } from './direction-of-use-input.component';

describe('DirectionOfUseInputComponent', () => {
  let component: DirectionOfUseInputComponent;
  let fixture: ComponentFixture<DirectionOfUseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionOfUseInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionOfUseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
