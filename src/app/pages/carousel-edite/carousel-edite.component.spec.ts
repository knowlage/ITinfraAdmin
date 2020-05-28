import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEditeComponent } from './carousel-edite.component';

describe('CarouselEditeComponent', () => {
  let component: CarouselEditeComponent;
  let fixture: ComponentFixture<CarouselEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
