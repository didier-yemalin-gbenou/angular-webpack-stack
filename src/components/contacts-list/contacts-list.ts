import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContactInterface } from '../../services/contacts.service';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.html',
  styleUrls: ['./contacts-list.scss'],
})

export class ContactsListComponent {
  @Input() contacts: ContactInterface[];
  @Input() activeIndex: number;
  @Output() setActiveContact: EventEmitter<number> = new EventEmitter();

  constructor() { }

  isActive(current: number) {
    return current === this.activeIndex;
  }

  handleClick(id: number) {
    this.activeIndex = id;
    this.setActiveContact.emit(id);
  }
}