import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChangeComponent } from './provider-change.component';

describe('ProviderChangeComponent', () => {
  let component: ProviderChangeComponent;
  let fixture: ComponentFixture<ProviderChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
