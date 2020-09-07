import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistOpointsScreenComponent } from './olist-opoints-screen.component';

describe('OlistOpointsScreenComponent', () => {
  let component: OlistOpointsScreenComponent;
  let fixture: ComponentFixture<OlistOpointsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistOpointsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistOpointsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
