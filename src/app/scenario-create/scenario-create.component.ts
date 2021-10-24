import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-scenario-create',
  templateUrl: './scenario-create.component.html',
  styleUrls: ['./scenario-create.component.scss']
})
export class ScenarioCreateComponent implements OnInit {

  get channel_id(): string {
    return this._m.channel_id;
  }

  get scenario_id(): string {
    return this._m.scenario_id;
  }

  private _scenarioCreateForm: FormGroup = this._fb.group({
    name: [''],
    created_at: [''],
    default: ['']
  });
  get scenarioCreateForm(): FormGroup {
    return this._scenarioCreateForm;
  }

  constructor(
    private _af: AngularFirestore,
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _app: AppService,
    private _m: ModelService
  ) { }

  ngOnInit(): void {
    const { snapshot } = this._activatedRoute;
    this._m.channel_id = snapshot.params.channel_id;
  }

  submitScenarioCreateForm(): void {
    const doc = this._scenarioCreateForm.value;
    const uid = this._m.user?.uid;
    const channel_id = this._m.channel_id;
    const scenario_id = this._app.generateID();
    const created_at = this._app.getTimestamp();

    this._scenarioCreateForm.value.scenario_id = scenario_id;
    this._scenarioCreateForm.value.created_at = created_at;
    this._scenarioCreateForm.value.default = (this._m.scenarios.length == 0);

    this._af.doc<any>(`users/${uid}/channels/${channel_id}/scenarios/${scenario_id}`).set(doc);
  }

}