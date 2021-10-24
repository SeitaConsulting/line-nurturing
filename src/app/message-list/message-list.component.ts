import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ModelService } from '../model.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  get messages(): any[] {
    return this._m.messages.sort((x: any, y: any) => {
      if(x.step < y.step) return -1;
      else return 1;
    });
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _m: ModelService
  ) { }

  ngOnInit(): void {
    const { snapshot } = this._activatedRoute;
    this._m.channel_id = snapshot.params.channel_id;
    this._m.scenario_id = snapshot.params.scenario_id;
  }

}
