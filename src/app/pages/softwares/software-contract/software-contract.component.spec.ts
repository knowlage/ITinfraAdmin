import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareContractComponent } from './software-contract.component';

describe('SoftwareContractComponent', () => {
  let component: SoftwareContractComponent;
  let fixture: ComponentFixture<SoftwareContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
