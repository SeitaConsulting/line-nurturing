import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioSettingsComponent } from './scenario-settings.component';

describe('ScenarioSettingsComponent', () => {
  let component: ScenarioSettingsComponent;
  let fixture: ComponentFixture<ScenarioSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
