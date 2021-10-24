import { AfterViewChecked, Component } from '@angular/core';

import { ModelService } from './model.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  get signedIn(): boolean {
    return this._m.signedIn;
  }

  constructor(
    private _m: ModelService
  ) {}

  ngAfterViewChecked(): void {
    $('h1').addClass('h4 mb-4');
    $('i').addClass('mr-2');
    $('section').addClass('py-5');

    $('.card').css('max-width', '648px');
  }

  signIn(): void {
    this._m.signIn();
  }

  signOut(): void {
    this._m.signOut();
  }

  toggleSignInState(): void {
    if(this._m.signedIn) {
      this.signOut();
    }
    else {
      this.signIn();
    }
  }
}
