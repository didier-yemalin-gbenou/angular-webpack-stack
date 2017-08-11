import { Component, Input, Output, EventEmitter } from '@angular/core';
import ContactService, { ContactInterface } from '../../services/contacts.service';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.html',
  styleUrls: ['./contact-info.scss']
})

export class ContactInfoComponent {
  @Input() contact: ContactInterface;
  @Input() id: number;
  @Input() isActive: boolean;

  @Output() clickHandler: EventEmitter<number> = new EventEmitter();

  public name: string;
  public email: string;
  public phone: string;
  public image: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.buildContact(this.contact, this.id);
  }

  private buildContact(contact: ContactInterface, id: number) {
    this.name = this.contactService.buildName(contact);
    this.email = contact.email;
    this.phone = contact.phone;
    this.image = contact.image;
  }

  public handleClick() {
    this.clickHandler.emit(this.id);
  }
}