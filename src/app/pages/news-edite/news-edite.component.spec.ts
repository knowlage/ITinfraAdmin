import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditeComponent } from './news-edite.component';

describe('NewsEditeComponent', () => {
  let component: NewsEditeComponent;
  let fixture: ComponentFixture<NewsEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
