import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterResultsMapComponent } from './spotter-results-map.component';

describe('SpotterResultsMapComponent', () => {
  let component: SpotterResultsMapComponent;
  let fixture: ComponentFixture<SpotterResultsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterResultsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterResultsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
