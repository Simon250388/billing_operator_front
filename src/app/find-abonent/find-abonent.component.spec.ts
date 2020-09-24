import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAbonentComponent } from './find-abonent.component';

describe('FindAbonentComponent', () => {
  let component: FindAbonentComponent;
  let fixture: ComponentFixture<FindAbonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAbonentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAbonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
