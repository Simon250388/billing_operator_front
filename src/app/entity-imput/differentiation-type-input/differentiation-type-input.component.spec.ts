/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DifferentiationTypeInputComponent } from './differentiation-type-input.component';

describe('DifferentiationTypeInputComponent', () => {
  let component: DifferentiationTypeInputComponent;
  let fixture: ComponentFixture<DifferentiationTypeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentiationTypeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiationTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
