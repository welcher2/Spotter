import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterApplicationComponent } from './spotter-application.component';

describe('SpotterApplicationComponent', () => {
  let component: SpotterApplicationComponent;
  let fixture: ComponentFixture<SpotterApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
