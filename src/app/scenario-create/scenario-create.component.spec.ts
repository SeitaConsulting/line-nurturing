import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioCreateComponent } from './scenario-create.component';

describe('ScenarioCreateComponent', () => {
  let component: ScenarioCreateComponent;
  let fixture: ComponentFixture<ScenarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
