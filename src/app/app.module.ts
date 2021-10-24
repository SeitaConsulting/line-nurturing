import { NgModule } from '@angular/core';

import { ClipboardModule } from '@angular/cdk/clipboard'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { ScenarioCreateComponent } from './scenario-create/scenario-create.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { ScenarioSettingsComponent } from './scenario-settings/scenario-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ChannelListComponent,
    ChannelCreateComponent,
    ScenarioListComponent,
    MessageListComponent,
    ScenarioCreateComponent,
    MessageCreateComponent,
    MessageEditComponent,
    ScenarioSettingsComponent,
  ],
  imports: [
    BrowserModule,

    ClipboardModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,

    ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
