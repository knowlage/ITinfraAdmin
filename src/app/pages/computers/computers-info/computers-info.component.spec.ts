import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersInfoComponent } from './computers-info.component';

describe('ComputersInfoComponent', () => {
  let component: ComputersInfoComponent;
  let fixture: ComponentFixture<ComputersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
