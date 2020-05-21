import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEducationCertificationInfoDialogComponent } from './save-education-certification-info-dialog.component';

describe('SaveEducationCertificationInfoDialogComponent', () => {
  let component: SaveEducationCertificationInfoDialogComponent;
  let fixture: ComponentFixture<SaveEducationCertificationInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEducationCertificationInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEducationCertificationInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
