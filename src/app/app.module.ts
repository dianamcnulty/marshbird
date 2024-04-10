import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
// import { MatCarouselModule } from '@ngbmodule/material-carousel';
import {MatButtonModule} from '@angular/material/button';


import { GameInfoComponent } from './game-info/game-info.component';
import { HistoryComponent } from './history/history.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { BuyGameComponent } from './buy-game/buy-game.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HistoryListComponent } from './history-list/history-list.component';
import { PhotoTileComponent } from './photo-tile/photo-tile.component';
// import { NgIconsModule } from '@ng-icons/core';
// import FontAwesome from '@ng-icons/font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    HistoryComponent,
    InstructionsComponent,
    BuyGameComponent,
    LandingComponent,
    CarouselComponent,
    PhotoTileComponent,
    HistoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    PhotoTileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
