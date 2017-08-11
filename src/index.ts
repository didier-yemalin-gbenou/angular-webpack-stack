// TODO, as of now I had to import polyfills due to error:
// Uncaught reflect-metadata shim is required when using class decorators
// Current fix refference:
// https://github.com/angular/angular-cli/issues/2008#issuecomment-247366275

import './polyfills';

import { NgModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { APP_ROUTES } from './routes';
import ContactService from './services/contacts.service';
import GravatarService from './services/gravatar.service';

import { BootstrapComponent } from './components/bootstrap/bootstrap';
import { FooterComponent } from './components/footer/footer';
import { NavigationComponent } from './components/navigation/navigation';
import { ContactInfoComponent } from './components/contact-info/contact-info';
import { ContactFormComponent } from './components/contacts-list-form/contacts-list-form';
import { ContactsListComponent } from './components/contacts-list/contacts-list';


// views
import { HomeViewComponent } from './views/home/home';
import { AboutViewComponent } from './views/about/about';

if (process.env.ENV === 'production') {
  enableProdMode();
}

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule
  ],
  declarations: [
    BootstrapComponent,
    FooterComponent,
    NavigationComponent,
    HomeViewComponent,
    AboutViewComponent,
    ContactInfoComponent,
    ContactFormComponent,
    ContactsListComponent
  ],
  exports:      [ BootstrapComponent ],
  bootstrap:    [ BootstrapComponent ],
  providers: [
    ContactService,
    GravatarService
  ]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
