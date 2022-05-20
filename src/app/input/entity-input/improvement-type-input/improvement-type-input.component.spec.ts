import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementTypeInputComponent } from './improvement-type-input.component';

describe('ImprovementTypeInputComponent', () => {
  let component: ImprovementTypeInputComponent;
  let fixture: ComponentFixture<ImprovementTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementTypeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
