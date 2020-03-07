import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterComponent } from './spotter.component';

describe('SpotterComponent', () => {
  let component: SpotterComponent;
  let fixture: ComponentFixture<SpotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
