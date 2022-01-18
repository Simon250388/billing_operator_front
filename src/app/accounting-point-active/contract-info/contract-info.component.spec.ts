import {ContractInfoComponent} from './contract-info.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('ContractInfoComponent', () => {
  let component: ContractInfoComponent;
  let fixture: ComponentFixture<ContractInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
