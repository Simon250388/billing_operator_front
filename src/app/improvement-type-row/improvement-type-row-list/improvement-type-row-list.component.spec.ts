import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementTypeRowListComponent } from './improvement-type-row-list.component';

describe('ImprovementTypeRowListComponent', () => {
  let component: ImprovementTypeRowListComponent;
  let fixture: ComponentFixture<ImprovementTypeRowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementTypeRowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementTypeRowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
