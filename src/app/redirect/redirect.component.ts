import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnChanges(): void {
    console.log('redirect onChanges')
    // window.location.href = 'https://marshbirdgames.square.site/'
  }
  ngOnInit(): void {
    console.log('redirect onChanges')
    // window.location.href = 'https://marshbirdgames.square.site/'
  }

}
