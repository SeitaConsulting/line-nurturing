import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppService } from '../app.service';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.scss']
})
export class ChannelCreateComponent implements OnInit {
  private _channelCreateForm: FormGroup = this._fb.group({
    id: [''],
    channel_id: [''],
    token: [''],
    secret: [''],
    created_at: ['']
  });
  get channelCreateForm(): FormGroup {
    return this._channelCreateForm;
  }

  private _callbackURL: string = 'https://line-nurturing.herokuapp.com/callback?channel_id=';
  get callbackURL(): string {
    let channel_id = this.channelCreateForm.value.channel_id;

    if(channel_id) return this._callbackURL + channel_id;
    else return '';
  }

  private _step: number = 0;
  get step(): number {
    return this._step;
  }

  constructor(
    private _clipboard: Clipboard,
    private _af: AngularFirestore,
    private _fb: FormBuilder,
    private _app: AppService,
    private _m: ModelService
  ) { }

  ngOnInit(): void { }

  submitChannelCreateForm(): void {
    const doc = this._channelCreateForm.value;
    const uid = this._m.user?.uid;
    const channel_id = this._channelCreateForm.value.channel_id;
    this._channelCreateForm.value.created_at = this._app.getTimestamp();

    this._af.doc<any>(`users/${uid}/channels/${channel_id}`).set(doc);
    this._af.doc<any>(`channels/${channel_id}`).set({
      channel_id: channel_id,
      uid: uid
    });
  }

  back(): void {
    this._step -= 1;
  }

  copyToClipboard(): void {
    this._clipboard.copy(this.callbackURL);
  }

  forward(): void {
    this._step += 1;
  }
}
