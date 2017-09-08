import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import ContactService, { ContactInterface } from '../../services/contacts.service';
import { AppStore } from '../../app-store';

interface LocalStateInterface {
  contacts: ContactInterface[];
  currentIndex: number;
  isFormOpen: boolean;
}

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: [ './home.scss' ]
})

export class HomeViewComponent {
  public contacts: ContactInterface[];
  public activeContact: ContactInterface;
  public buildName: Function;
  private localState: LocalStateInterface;

  constructor(private _contactService: ContactService, private appStore: AppStore) {
    this.buildName = this._contactService.buildName;

    this.localState = {
      contacts: [],
      currentIndex: null,
      isFormOpen: false
    };
  }

  ngOnInit() {
    this.localState = Object.assign({}, this.localState, this.appStore.getState().homeState);
    this.setActive(this.localState.currentIndex);
  }

  public openForm() {
    this.localState.isFormOpen = true;
    this.updateState();
  }

  public cancelNewContact(res: string) {
    if (res === 'cancelAddContact') {
      this.localState.isFormOpen = false;
    }
    this.updateState();
  }

  public addNewContact(contact: ContactInterface) {
    if (contact.firstName) {
      this.addContact(contact);
      this.activeContact = contact;
      this.localState.currentIndex = this.localState.contacts.length - 1;
      this.localState.isFormOpen = false;
    }
    this.updateState();
  }

  public setActive(id: number) {
    this.activeContact = this.localState.contacts[id];
  }

  public getContacts() {
    return this.localState.contacts;
  }

  private addContact(contact: ContactInterface) {
    this.localState.contacts.push(contact);
    this.updateState();
  }

  private updateState() {
    const oldState = this.appStore.getState();
    const newState = Object.assign({}, oldState, {
      homeState: this.localState
    });

    this.appStore.setState(newState);
  }
}