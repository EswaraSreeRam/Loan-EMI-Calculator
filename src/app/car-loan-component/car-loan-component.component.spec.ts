import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoanComponentComponent } from './car-loan-component.component';

describe('CarLoanComponentComponent', () => {
  let component: CarLoanComponentComponent;
  let fixture: ComponentFixture<CarLoanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarLoanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
