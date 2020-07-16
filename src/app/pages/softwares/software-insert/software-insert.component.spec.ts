import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareInsertComponent } from './software-insert.component';

describe('SoftwareInsertComponent', () => {
  let component: SoftwareInsertComponent;
  let fixture: ComponentFixture<SoftwareInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
