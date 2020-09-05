import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiComentComponent } from './olist-ui-coment.component';

describe('OlistUiComentComponent', () => {
  let component: OlistUiComentComponent;
  let fixture: ComponentFixture<OlistUiComentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiComentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
