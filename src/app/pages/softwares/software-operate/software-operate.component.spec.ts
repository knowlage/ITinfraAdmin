import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareOperateComponent } from './software-operate.component';

describe('SoftwareOperateComponent', () => {
  let component: SoftwareOperateComponent;
  let fixture: ComponentFixture<SoftwareOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
