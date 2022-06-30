import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-game',
  templateUrl: './buy-game.component.html',
  styleUrls: ['./buy-game.component.css']
})
export class BuyGameComponent implements OnInit {
  @Input() gameContent;
  constructor() { }

  ngOnInit(): void {
  }

}
