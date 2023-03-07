import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanComponentComponent } from './home-loan-component.component';

describe('HomeLoanComponentComponent', () => {
  let component: HomeLoanComponentComponent;
  let fixture: ComponentFixture<HomeLoanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
