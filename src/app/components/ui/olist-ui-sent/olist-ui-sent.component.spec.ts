import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiSentComponent } from './olist-ui-sent.component';

describe('OlistUiSentComponent', () => {
  let component: OlistUiSentComponent;
  let fixture: ComponentFixture<OlistUiSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
