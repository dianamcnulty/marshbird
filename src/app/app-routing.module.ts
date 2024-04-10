import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LandingComponent } from './landing/landing.component';
import { RedirectComponent } from './redirect/redirect.component';
import { RedirectService } from './redirect.service';

const routes: Routes = [
  // { path: 'game/:gameid', component: GameInfoComponent},
  // { path: 'game/:gameid/:tab', component: GameInfoComponent},
  // { path: '', component: AppComponent},
  // { path: 'defaultsite', component: RedirectComponent},
  {
    path: '',
    canActivate: [RedirectService],
    component: RedirectComponent,
    data: {
      externalUrl: 'https://marshbirdgames.square.site/'
    }
},
{
  path: 'defaultsite',
  canActivate: [RedirectService],
  component: RedirectComponent,
  data: {
    externalUrl: 'https://marshbirdgames.square.site/'
  }
},
{
  path: 'marshbird',
  canActivate: [RedirectService],
  component: RedirectComponent,
  data: {
    externalUrl: 'https://marshbirdgames.square.site/'
  }
},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
