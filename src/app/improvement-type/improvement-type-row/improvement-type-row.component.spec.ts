import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementTypeRowComponent } from './improvement-type-row.component';

describe('ImprovementTypeRowComponent', () => {
  let component: ImprovementTypeRowComponent;
  let fixture: ComponentFixture<ImprovementTypeRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementTypeRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementTypeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
