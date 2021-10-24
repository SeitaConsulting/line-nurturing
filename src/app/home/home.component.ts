import { Component, OnInit } from '@angular/core';

import { ModelService } from '../model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get channels(): any[] {
    return this._m.channels;
  }

  get signedIn(): boolean {
    return this._m.signedIn;
  }

  constructor(
    private _m: ModelService
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this._m.signIn();
  }
}
