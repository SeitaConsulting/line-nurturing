import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  generateID(): string {
    return uuid();
  }

  getTimestamp(): string {
    return moment().format();
  }
}
