import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})

export class FooterComponent {
  public copyright: string;

  constructor() {
    const startingYear: number = 2017;
    const currentYear: number = new Date().getFullYear();

    this.copyright = startingYear === currentYear ? currentYear.toString() : `${startingYear} - ${currentYear}`;
  }
}