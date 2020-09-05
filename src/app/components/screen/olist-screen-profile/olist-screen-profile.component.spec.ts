import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistScreenProfileComponent } from './olist-screen-profile.component';

describe('OlistScreenProfileComponent', () => {
  let component: OlistScreenProfileComponent;
  let fixture: ComponentFixture<OlistScreenProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistScreenProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistScreenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
