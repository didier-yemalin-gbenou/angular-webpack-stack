import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactInterface} from '../../services/contacts.service';
import {AppStore} from '../../app-store';

@Component({
  selector: 'contacts-list-form',
  templateUrl: './contacts-list-form.html',
  styleUrls: ['./contacts-list-form.scss']
})

export class ContactFormComponent implements OnInit {
  @Output() onCancel: EventEmitter<string> = new EventEmitter();
  @Output() onAddNewContact: EventEmitter<ContactInterface> = new EventEmitter();

  public firstName: string;
  public middleName?: string;
  public lastName?: string;
  public email?: string;
  public phone?: string;
  public submitted: boolean;

  constructor(private appStore: AppStore) {
  }

  ngOnInit() {
    const formState = this.appStore.getState().formState;

    if (formState) {
      this.firstName = formState.firstName;
      this.middleName = formState.middleName;
      this.lastName = formState.lastName;
      this.email = formState.email;
      this.phone = formState.phone;
    }

    this.submitted = false;
  }

  public onFormSubmit(formData: NgForm) {
    this.onAddNewContact.emit(formData.value);
    formData.resetForm();
  }

  public handleCancel() {
    this.onCancel.emit('cancelAddContact');
  }

  public onChange(value: string, model: string) {
    const newObj: { [key: string]: string } = {};
    newObj[model] = value;

    Object.assign({}, this, newObj);
    this.updateState();
  }

  private updateState() {
    const prevState = this.appStore.getState();
    const newState = Object.assign({}, prevState, {
      formState: {
        firstName:  this.firstName,
        middleName:  this.middleName,
        lastName:  this.lastName,
        email:  this.email,
        phone:  this.phone,
      }
    });

    this.appStore.setState(newState);
  }
}