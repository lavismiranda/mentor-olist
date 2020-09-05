import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiProfileComponent } from './olist-ui-profile.component';

describe('OlistUiProfileComponent', () => {
  let component: OlistUiProfileComponent;
  let fixture: ComponentFixture<OlistUiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
