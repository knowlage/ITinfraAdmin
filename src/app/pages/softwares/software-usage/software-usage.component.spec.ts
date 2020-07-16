import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareUsageComponent } from './software-usage.component';

describe('SoftwareUsageComponent', () => {
  let component: SoftwareUsageComponent;
  let fixture: ComponentFixture<SoftwareUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
