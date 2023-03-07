import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanComponentComponent } from './personal-loan-component.component';

describe('PersonalLoanComponentComponent', () => {
  let component: PersonalLoanComponentComponent;
  let fixture: ComponentFixture<PersonalLoanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLoanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
