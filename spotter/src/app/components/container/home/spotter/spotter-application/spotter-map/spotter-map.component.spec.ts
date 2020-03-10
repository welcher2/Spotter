import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterMapComponent } from './spotter-map.component';

describe('SpotterMapComponent', () => {
  let component: SpotterMapComponent;
  let fixture: ComponentFixture<SpotterMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
