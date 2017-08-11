import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import ContactService, { ContactInterface } from '../../services/contacts.service';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: [ './home.scss' ]
})

export class HomeViewComponent {
  public isFormOpen: boolean;
  public activeContactId: number;
  public contacts: ContactInterface[];
  public activeContact: ContactInterface;
  public buildName: Function;

  constructor(private _contactService: ContactService) {
    this.isFormOpen = false;
    this.contacts = [];
    this.activeContactId = null;
    this.buildName = this._contactService.buildName;
  }

  ngOnInit() {
    this.activeContact = this.contacts.length > 0 ? this.contacts[this.activeContactId] : null;
  }

  public openForm() {
    this.isFormOpen = true;
  }

  public cancelNewContact(res: string) {
    if (res === 'cancelAddContact') {
      this.isFormOpen = false;
    }
  }

  public addNewContact(contact: ContactInterface) {
    this.contacts.push(contact);
    this.activeContact = contact;
    this.activeContactId = this.contacts.length - 1;
    this.isFormOpen = false;
  }

  public setActive(id: number) {
    this.activeContact = this.contacts[id];
  }
}