import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiInfoComponent } from './olist-ui-info.component';

describe('OlistUiInfoComponent', () => {
  let component: OlistUiInfoComponent;
  let fixture: ComponentFixture<OlistUiInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
