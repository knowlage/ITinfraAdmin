import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsEditeComponent } from './faqs-edite.component';

describe('FaqsEditeComponent', () => {
  let component: FaqsEditeComponent;
  let fixture: ComponentFixture<FaqsEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
