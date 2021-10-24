import { Component, OnInit } from '@angular/core';

import { ModelService } from '../model.service';

@Component({
  selector: 'app-scenario-settings',
  templateUrl: './scenario-settings.component.html',
  styleUrls: ['./scenario-settings.component.scss']
})
export class ScenarioSettingsComponent implements OnInit {

  get scenarios(): any[] {
    return this._m.scenarios;
  }

  constructor(
    private _m: ModelService
  ) { }

  ngOnInit(): void {
  }

}
