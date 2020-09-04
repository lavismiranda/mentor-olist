import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiInfoCardComponent } from './olist-ui-info-card.component';

describe('OlistUiInfoCardComponent', () => {
  let component: OlistUiInfoCardComponent;
  let fixture: ComponentFixture<OlistUiInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
