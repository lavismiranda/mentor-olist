import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistScreenDashboardComponent } from './olist-screen-dashboard.component';

describe('OlistScreenDashboardComponent', () => {
  let component: OlistScreenDashboardComponent;
  let fixture: ComponentFixture<OlistScreenDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistScreenDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistScreenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
