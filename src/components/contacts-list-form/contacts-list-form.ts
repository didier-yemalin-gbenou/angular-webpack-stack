import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactInterface } from '../../services/contacts.service';

@Component({
  selector: 'contacts-list-form',
  templateUrl: './contacts-list-form.html',
  styleUrls: ['./contacts-list-form.scss']
})

export class ContactFormComponent {
  @Output() onCancel: EventEmitter<string> = new EventEmitter();
  @Output() onAddNewContact: EventEmitter<ContactInterface> = new EventEmitter();

  public firstName: number;
  public middleName?: string;
  public lastName?: string;
  public email?: string;
  public phone?: string;
  public submitted: boolean;

  constructor() {
    this.submitted = false;
  }

  public onFormSubmit(formData: NgForm) {
    this.onAddNewContact.emit(formData.value);
    formData.resetForm();
  }

  public handleCancel() {
    this.onCancel.emit('cancelAddContact');
  }
}