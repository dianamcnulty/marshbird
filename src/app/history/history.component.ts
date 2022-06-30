import { Component, OnInit, Input } from '@angular/core';
import { GameSchema } from '../game-schema';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() gameContent;
  constructor() { }

  ngOnInit(): void {
  }

}
