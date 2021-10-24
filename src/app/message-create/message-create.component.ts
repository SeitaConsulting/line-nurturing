import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.scss']
})
export class MessageCreateComponent implements OnInit {

  get channel_id(): string {
    return this._m.channel_id;
  }

  private _messageCreateForm: FormGroup = this._fb.group({
    name: [''],
    message_id: [''],
    created_at: [''],
    step: ['']
  });
  get messageCreateForm(): FormGroup {
    return this._messageCreateForm;
  }

  constructor(
    private _af: AngularFirestore,
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _app: AppService,
    private _m: ModelService
  ) { }

  ngOnInit(): void {
    const { snapshot } = this._activatedRoute;
    this._m.channel_id = snapshot.params.channel_id;
    this._m.scenario_id = snapshot.params.scenario_id;

    if(this._m.messages) {
      this.messageCreateForm.patchValue({
        name: '#' + (this._m.messages.length+1)
      });
    }
    else {
      this._router.navigate(['channel', this._m.channel_id, 'scenario', this._m.scenario_id, 'messages']);
    }
  }

  submitMessageCreateForm(): void {
    const doc = this._messageCreateForm.value;
    const uid = this._m.user?.uid;
    const channel_id = this._m.channel_id;
    const scenario_id = this._m.scenario_id;
    const message_id = this._app.generateID();
    const created_at = this._app.getTimestamp();

    this._messageCreateForm.value.message_id = message_id;
    this._messageCreateForm.value.created_at = created_at;
    this._messageCreateForm.value.step = this._m.messages.length;

    this._af.doc<any>(`users/${uid}/channels/${channel_id}/scenarios/${scenario_id}/messages/${message_id}`).set(doc);
    this._router.navigate(['channel', channel_id, 'scenario', scenario_id, 'message', message_id, 'edit']);
  }

}