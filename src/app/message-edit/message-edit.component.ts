import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppService } from '../app.service';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.scss']
})
export class MessageEditComponent implements OnInit {

  get message(): any {
    return this._m.message;
  }

  private _messageEditForm: FormGroup = this._fb.group({
    text: ['']
  });
  get messageEditForm(): FormGroup {
    return this._messageEditForm;
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
    this._m.message_id = snapshot.params.message_id;

    if(this._m.message === null) {
      this._router.navigate(['', 'channel', this._m.channel_id, 'scenario', this._m.scenario_id, 'messages']);
    }
    else {
      this._messageEditForm.patchValue(this._m.message);
    }
  }

  submitMessageEditForm(): void {
    const doc = this._messageEditForm.value;
    const uid = this._m.user?.uid;
    const channel_id = this._m.channel_id;
    const scenario_id = this._m.scenario_id;
    const message_id = this._m.message.message_id;

    this._af.doc<any>(`users/${uid}/channels/${channel_id}/scenarios/${scenario_id}/messages/${message_id}`).update(doc);
  }

}
