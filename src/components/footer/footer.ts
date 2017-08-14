import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})

export class FooterComponent implements OnInit {
  public copyright: string;

  constructor() { }

  ngOnInit() {
    const startingYear: number = 2017;
    const currentYear: number = new Date().getFullYear();

    this.copyright = startingYear === currentYear ?
      currentYear.toString() : `${startingYear} - ${currentYear}`;
  }
}