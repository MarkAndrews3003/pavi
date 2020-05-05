import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveCodeComponent } from './recive-code.component';

describe('ReciveCodeComponent', () => {
  let component: ReciveCodeComponent;
  let fixture: ComponentFixture<ReciveCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciveCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
