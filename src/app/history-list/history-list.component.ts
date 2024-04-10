import { Component, OnInit, HostListener } from '@angular/core';
// import {MatTabsModule} from '@angular/material/tabs';
import { PhotoTileComponent } from '../photo-tile/photo-tile.component';
import { GAME_DATA } from '../game-data';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css'],
  // standalone: true,
  // imports: [MatTabsModule],
})
export class HistoryListComponent implements OnInit {
  breakpoint = getBreakPointColumns(window.innerWidth);
  gameData = []
  // {
  //   egypt:{displayName: 'Egypt & Middle East', games: []},
  // medieval:{displayName: 'Medieval Europe', games: []},
  // america:{displayName: 'The Americas', games: []},
  // victorian:{displayName: 'Victorian Era', games: []},
  // norse:{displayName: 'Norse & Viking', games: []}
 
  // }
  

  constructor() { }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    for(const game in GAME_DATA) {
      this.gameData.push(GAME_DATA[game])
      // if (GAME_DATA[game].categories.includes('medieval')) {
      //   this.gameData.medieval.games.push(GAME_DATA[game])
      // }
      // if (GAME_DATA[game].categories.includes('egypt')) {
      //   this.gameData.egypt.games.push(GAME_DATA[game])
      // }
      // if (GAME_DATA[game].categories.includes('norse')) {
      //   this.gameData.norse.games.push(GAME_DATA[game])
      // }
      // if (GAME_DATA[game].categories.includes('victorian')) {
      //   this.gameData.victorian.games.push(GAME_DATA[game])
      // }
      // if (GAME_DATA[game].categories.includes('america')) {
      //   this.gameData.america.games.push(GAME_DATA[game])
      // }
    }
    console.log(this.gameData)
    this.breakpoint = getBreakPointColumns(window.innerWidth)
  }


}
const getBreakPointColumns = (windowWidth) => {
  let columns
  switch(true){
    case windowWidth < 500:
      columns = 1
      break;
    case (windowWidth < 700 ):

      columns = 3
      break;
    default:
      columns = 3;
  }
  return columns
}