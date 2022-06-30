import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.gameid = params['gameid']; // (+) converts string 'id' to a number
      this.gameContent = GAME_DATA[this.gameid];
      console.log('game id', this.gameid);
      // In a real app: dispatch action to load the details here.

    });

    // const id = this.route.snapshot.paramMap.get('gameid');
    // this.gameid = id.subscribe;
    console.log(this.gameid);
  }
}
