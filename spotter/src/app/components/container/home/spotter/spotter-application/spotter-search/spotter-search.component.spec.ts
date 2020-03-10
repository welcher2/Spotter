import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterSearchComponent } from './spotter-search.component';

describe('SpotterSearchComponent', () => {
  let component: SpotterSearchComponent;
  let fixture: ComponentFixture<SpotterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
