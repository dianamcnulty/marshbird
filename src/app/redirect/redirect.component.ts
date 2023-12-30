import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://marshbirdgames.square.site/'
  }

}
