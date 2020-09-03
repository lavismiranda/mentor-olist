import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiToolbarComponent } from './olist-ui-toolbar.component';

describe('OlistUiToolbarComponent', () => {
  let component: OlistUiToolbarComponent;
  let fixture: ComponentFixture<OlistUiToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
