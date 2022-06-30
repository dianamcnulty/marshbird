import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'game/:gameid', component: GameInfoComponent},
  { path: '', component: LandingComponent,
// children: [
//   {path: 'game/:gameid', component: GameInfoComponent}
// ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
