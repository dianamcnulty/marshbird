import { Component, getModuleFactory, OnInit } from '@angular/core';
import { GAME_DATA } from './game-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-marshbird';
  gameNav: Array <{
    id: string;
    name: number;
  }> = []
  ngOnInit(): void {
    let game: any;
    for (game in GAME_DATA) {
      console.log('game', game);
      this.gameNav.push({name: GAME_DATA[game].name, id: game})
    }
  }
  
}
