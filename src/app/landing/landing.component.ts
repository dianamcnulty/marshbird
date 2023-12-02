import { Component, OnInit, HostListener  } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  breakpoint = getBreakPointColumns(window.innerWidth);
  constructor() { }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.breakpoint = getBreakPointColumns(window.innerWidth)
  }

}

const getBreakPointColumns = (windowWidth) => {
  let columns
  switch(true){
    case windowWidth < 500:
      columns = 1
      break;
    case (windowWidth < 700):

      columns = 3
      break;
    default:
      columns = 4;
  }
  return columns
}
