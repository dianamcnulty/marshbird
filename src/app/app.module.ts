import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
// import { MatCarouselModule } from '@ngbmodule/material-carousel';

import { GameInfoComponent } from './game-info/game-info.component';
import { HistoryComponent } from './history/history.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { BuyGameComponent } from './buy-game/buy-game.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    HistoryComponent,
    InstructionsComponent,
    BuyGameComponent,
    LandingComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
