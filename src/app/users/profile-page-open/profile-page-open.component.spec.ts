import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageOpenComponent } from './profile-page-open.component';

describe('ProfilePageOpenComponent', () => {
  let component: ProfilePageOpenComponent;
  let fixture: ComponentFixture<ProfilePageOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
