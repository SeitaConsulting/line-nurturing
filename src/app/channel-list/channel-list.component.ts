import { Component, OnInit } from '@angular/core';

import { ModelService } from '../model.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  get channels() {
    return this._m.channels;
  }

  constructor(
    private _m: ModelService
  ) { }

  ngOnInit(): void {
  }

}