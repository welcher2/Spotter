import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterResultsListComponent } from './spotter-results-list.component';

describe('SpotterResultsListComponent', () => {
  let component: SpotterResultsListComponent;
  let fixture: ComponentFixture<SpotterResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
