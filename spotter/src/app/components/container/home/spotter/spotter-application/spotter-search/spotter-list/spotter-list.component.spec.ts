import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterListComponent } from './spotter-list.component';

describe('SpotterListComponent', () => {
  let component: SpotterListComponent;
  let fixture: ComponentFixture<SpotterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
