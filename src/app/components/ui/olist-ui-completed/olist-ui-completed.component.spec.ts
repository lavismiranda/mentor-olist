import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiCompletedComponent } from './olist-ui-completed.component';

describe('OlistUiCompletedComponent', () => {
  let component: OlistUiCompletedComponent;
  let fixture: ComponentFixture<OlistUiCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
