import { Component, getModuleFactory, OnInit, OnChanges } from '@angular/core';
import { GAME_DATA } from './game-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marshbird';
  logoDisplay = true;
  gameNav: Array<{
    id: string;
    name: number;
  }> = []
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    console.log('app onInit')


    let game: any;
    for (game in GAME_DATA) {
      this.gameNav.push({ name: GAME_DATA[game].name, id: game });
    }
  }
  ngOnChanges(): void {
    console.log('app onChange')

    if (this.router.url === '/') {
      this.logoDisplay = false;
    } else {
      this.logoDisplay = true;
    }
  }
}
