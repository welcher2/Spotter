import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommunityMemberComponent } from './header-community-member.component';

describe('HeaderCommunityMemberComponent', () => {
  let component: HeaderCommunityMemberComponent;
  let fixture: ComponentFixture<HeaderCommunityMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCommunityMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCommunityMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
