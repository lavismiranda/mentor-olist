import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiOpointsComponent } from './olist-ui-opoints.component';

describe('OlistUiOpointsComponent', () => {
  let component: OlistUiOpointsComponent;
  let fixture: ComponentFixture<OlistUiOpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiOpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiOpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
