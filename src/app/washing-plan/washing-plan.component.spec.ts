import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingPlanComponent } from './washing-plan.component';

describe('WashingPlanComponent', () => {
  let component: WashingPlanComponent;
  let fixture: ComponentFixture<WashingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
