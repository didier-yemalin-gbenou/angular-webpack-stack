import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: [ './about.scss' ]
})

export class AboutViewComponent {
  constructor() {}

  goToUrl(url: string) {
    window.open(url,'_blank');
  }
}