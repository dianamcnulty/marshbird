import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CarouselComponent {
  @Input() imageList;

  constructor() {  
    console.log('imageList', typeof this.imageList, this.imageList);
  }

  ngOnInit(): void {
  }
}


