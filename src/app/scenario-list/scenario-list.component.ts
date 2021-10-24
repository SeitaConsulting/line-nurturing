import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModelService } from '../model.service';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.scss']
})
export class ScenarioListComponent implements OnInit {

  get channel_id(): string {
    return this._m.channel_id;
  }

  get scenario_id(): string {
    return this._m.scenario_id;
  }

  get scenarios(): any[] {
    return this._m.scenarios;
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _m: ModelService
  ) { }

  ngOnInit(): void {
    const { snapshot } = this._activatedRoute;
    this._m.channel_id = snapshot.params.channel_id;
  }

}
