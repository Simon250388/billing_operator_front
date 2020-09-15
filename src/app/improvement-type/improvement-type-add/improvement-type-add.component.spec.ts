import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementTypeAddComponent } from './improvement-type-add.component';

describe('ImprovementTypeAddComponent', () => {
  let component: ImprovementTypeAddComponent;
  let fixture: ComponentFixture<ImprovementTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
