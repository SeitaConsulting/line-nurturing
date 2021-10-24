import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private _authState: Observable<firebase.User | null>;
  get authState(): Observable<firebase.User | null>{
    return this._authState;
  }
  
  private _prev_channel_id: string = '';
  private _channel_id: string = '';
  set channel_id(value: string) {
    this._channel_id = value;
  }
  get channel_id(): string {
    return this._channel_id;
  }
  
  private _channels: any[] = [];
  get channels(): any[] {
    return this._channels;
  }

  private _prev_message_id: string = '';
  private _message_id: string = '';
  set message_id(value: string) {
    this._message_id = value;
  }
  get message_id(): string {
    return this._message_id;
  }
  
  get message(): any {
    for(let message of this._messages) {
      if(message.message_id === this._message_id) {
        return message;
      }
    }
    return null as any;
  }
  
  private _messages: any[] = [];
  get messages(): any[] {
    if(this._user != null && this._prev_scenario_id != this._scenario_id) {
      this._prev_scenario_id = this._scenario_id;
      this._af.collection<any>(`users/${this._user.uid}/channels/${this._channel_id}/scenarios/${this._scenario_id}/messages`).valueChanges().subscribe((messages: any[]) => {
        this._messages = messages;
      });
    }

    return this._messages;
  }

  private _prev_scenario_id: string = '';
  private _scenario_id: string = '';
  set scenario_id(value: string) {
    this._scenario_id = value;
  }
  get scenario_id(): string {
    return this._scenario_id;
  }
  
  private _scenarios: any[] = [];
  get scenarios(): any[] {
    if(this._user != null && this._prev_channel_id != this._channel_id) {
      this._prev_channel_id = this._channel_id;
      this._af.collection<any>(`users/${this._user.uid}/channels/${this._channel_id}/scenarios`).valueChanges().subscribe((scenarios: any[]) => {
        this._scenarios = scenarios;
      });
    }
    return this._scenarios;
  }

  get signedIn(): boolean {
    return !!this._user;
  }

  private _user: firebase.User | null = null;
  get user(): firebase.User | null {
    return this._user;
  }

  constructor(
    private _afa: AngularFireAuth,
    private _af: AngularFirestore,
  ) {
    this._authState = this._afa.authState;
    this._authState.subscribe((user: firebase.User | null) => {
      if(user) {
        this._user = user;
	this._af.collection(`users/${user.uid}/channels`).valueChanges().subscribe((channels: any[]) => {
	  this._channels = channels;
	});
      }
    });
  }

  signIn(): void {
    this._afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  signOut(): void {
    this._afa.signOut();
    this._user = null;
  }
  
}
