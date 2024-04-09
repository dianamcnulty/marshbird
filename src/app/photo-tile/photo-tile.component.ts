import { Component, OnInit, Input } from '@angular/core';
import { GAME_DATA } from '../game-data';
import { GameSchema } from '../game-schema';

@Component({
  selector: 'app-photo-tile',
  templateUrl: './photo-tile.component.html',
  styleUrls: ['./photo-tile.component.css']
})
export class PhotoTileComponent implements OnInit {
  @Input() gameId!: any
  gameContent: GameSchema | undefined;
  constructor() { }

  ngOnInit(): void {
         console.log(GAME_DATA[this.gameId])
         this.gameContent = GAME_DATA[this.gameId]
  }

}
