import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistDialogComponent } from './olist-dialog.component';

describe('OlistDialogComponent', () => {
  let component: OlistDialogComponent;
  let fixture: ComponentFixture<OlistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
