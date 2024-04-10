import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LandingComponent } from './landing/landing.component';
import { RedirectComponent } from './redirect/redirect.component';
import { HistoryListComponent } from './history-list/history-list.component';

const routes: Routes = [
  { path: 'game/:gameid', component: GameInfoComponent},
  { path: 'how-to-play/:gameid', component: GameInfoComponent},
  { path: 'game/:gameid/:tab', component: GameInfoComponent},
  { path: 'learn', component: HistoryListComponent},
  { path: '', component: LandingComponent},
  {path: '', component: AppComponent},
  // { path: 'defaultsite', component: RedirectComponent},
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
