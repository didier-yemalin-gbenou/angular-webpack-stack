import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';

// TS Interfaces
import { ContactInterface } from './services/contacts.service';

interface HomeStateInterface {
  contacts: ContactInterface[];
  currentIndex: number;
  isFormOpen: boolean;
}

interface ContactListFormState  extends ContactInterface {

}

export interface State {
  homeState?: HomeStateInterface;
  formState?: ContactListFormState;
}

const defaultState: State = {
  homeState: {
    contacts: [],
    currentIndex: null,
    isFormOpen: false
  }
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class AppStore {
  private _store = _store;
  changes = this._store
    .asObservable()
    .distinctUntilChanged();

  setState(state: State) {
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}