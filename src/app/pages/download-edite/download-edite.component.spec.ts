import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEditeComponent } from './download-edite.component';

describe('DownloadEditeComponent', () => {
  let component: DownloadEditeComponent;
  let fixture: ComponentFixture<DownloadEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
