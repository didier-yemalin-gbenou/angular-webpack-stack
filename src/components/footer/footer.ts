import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})

export class FooterComponent {
  private readonly startingYear: number = 2017;
  private currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  public getCopyright(): string {
    return `${this.startingYear} - ${this.currentYear}`;
  }
}