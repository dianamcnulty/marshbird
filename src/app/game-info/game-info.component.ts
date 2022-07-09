import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { GAME_DATA } from '../game-data';
import { GameSchema } from '../game-schema';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameInfoComponent {
  background: ThemePalette = 'primary';
  gameid: any = undefined;
  private sub: any;
  gameContent: GameSchema | undefined;
  selectedTab: number = 0;
  tabMap = ['history', 'instructions', 'buy']

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      console.log(params)
      this.gameid = params['gameid']; // (+) converts string 'id' to a number
      this.gameContent = GAME_DATA[this.gameid];
      if(params['tab'] && (this.tabMap.indexOf(params['tab']) > -1)) {
        this.selectedTab = this.tabMap.indexOf(params['tab'])
        console.log('index?', this.tabMap.indexOf(params['tab']))
      }
      this.selectedTab = params['tab'] ? this.tabMap.indexOf(params['tab']) : this.selectedTab;
      console.log('game id', this.gameid);
      // console.log('routparams',this.route.params)
      

      // In a real app: dispatch action to load the details here.
    });
    // this.selectedTab = this.tab ? this.tabMap.indexOf(this.tab) : this.tab;
  }
}
