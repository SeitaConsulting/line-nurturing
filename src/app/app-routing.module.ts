import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { ScenarioCreateComponent } from './scenario-create/scenario-create.component';
import { ScenarioSettingsComponent } from './scenario-settings/scenario-settings.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'channels', component: ChannelListComponent },
  { path: 'channels/create', component: ChannelCreateComponent },
  { path: 'channel/:channel_id/scenarios', component: ScenarioListComponent },
  { path: 'channel/:channel_id/scenarios/create', component: ScenarioCreateComponent },
  { path: 'channel/:channel_id/scenarios/settings', component: ScenarioSettingsComponent },
  { path: 'channel/:channel_id/scenario/:scenario_id/messages', component: MessageListComponent },
  { path: 'channel/:channel_id/scenario/:scenario_id/messages/create', component: MessageCreateComponent },
  { path: 'channel/:channel_id/scenario/:scenario_id/message/:message_id/edit', component: MessageEditComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
