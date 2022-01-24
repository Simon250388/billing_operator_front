import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInputComponent } from './building-input.component';

describe('BuildingInputComponent', () => {
  let component: BuildingInputComponent;
  let fixture: ComponentFixture<BuildingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
