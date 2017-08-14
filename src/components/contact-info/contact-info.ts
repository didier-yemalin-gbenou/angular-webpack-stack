import { Component, Input, Output, EventEmitter } from '@angular/core';
import ContactService, { ContactInterface } from '../../services/contacts.service';
import GravatarService from '../../services/gravatar.service';

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

  constructor(
    private contactService: ContactService, private gravatarService: GravatarService
  ) {}

  ngOnInit() {
    this.buildContact(this.contact, this.id);

    if (this.email) {
      this.gravatarService
        .getAvatar(this.email)
        .subscribe(data => {
          this.image = data;
        });
    }
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