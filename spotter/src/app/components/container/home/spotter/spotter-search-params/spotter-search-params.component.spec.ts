import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterSearchParamsComponent } from './spotter-search-params.component';

describe('SpotterSearchParamsComponent', () => {
  let component: SpotterSearchParamsComponent;
  let fixture: ComponentFixture<SpotterSearchParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterSearchParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterSearchParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
