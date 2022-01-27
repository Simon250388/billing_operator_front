/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleNumberChangeComponent} from './simple-number-change.component';

describe('SimpleNumberChangeComponent', () => {
  let component: SimpleNumberChangeComponent;
  let fixture: ComponentFixture<SimpleNumberChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleNumberChangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNumberChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
