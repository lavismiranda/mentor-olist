import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiTableComponent } from './olist-ui-table.component';

describe('OlistUiTableComponent', () => {
  let component: OlistUiTableComponent;
  let fixture: ComponentFixture<OlistUiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
