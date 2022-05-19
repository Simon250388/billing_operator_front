/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalcultaionListComponent } from './calcultaion-list.component';

describe('CalcultaionListComponent', () => {
  let component: CalcultaionListComponent;
  let fixture: ComponentFixture<CalcultaionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcultaionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcultaionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
