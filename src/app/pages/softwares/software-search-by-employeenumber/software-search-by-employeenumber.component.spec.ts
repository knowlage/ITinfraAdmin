import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSearchByEmployeenumberComponent } from './software-search-by-employeenumber.component';

describe('SoftwareSearchByEmployeenumberComponent', () => {
  let component: SoftwareSearchByEmployeenumberComponent;
  let fixture: ComponentFixture<SoftwareSearchByEmployeenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSearchByEmployeenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSearchByEmployeenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
