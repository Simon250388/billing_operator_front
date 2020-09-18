import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementTypeRowAddComponent } from './improvement-type-row-add.component';

describe('ImprovementTypeRowAddComponent', () => {
  let component: ImprovementTypeRowAddComponent;
  let fixture: ComponentFixture<ImprovementTypeRowAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementTypeRowAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementTypeRowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
