import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSoftwaresComponent } from './software-softwares.component';

describe('SoftwareSoftwaresComponent', () => {
  let component: SoftwareSoftwaresComponent;
  let fixture: ComponentFixture<SoftwareSoftwaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSoftwaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSoftwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
