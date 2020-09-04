import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistUiEvaluationComponent } from './olist-ui-evaluation.component';

describe('OlistUiEvaluationComponent', () => {
  let component: OlistUiEvaluationComponent;
  let fixture: ComponentFixture<OlistUiEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistUiEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistUiEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
