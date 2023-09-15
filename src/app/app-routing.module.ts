import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'game/:gameid', component: GameInfoComponent},
  { path: 'game/:gameid/:tab', component: GameInfoComponent},
  { path: '', component: LandingComponent},
  { path: 'defaultsite', redirectTo: ''},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
