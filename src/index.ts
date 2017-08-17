// TODO, as of now I had to import polyfills due to error:
// Uncaught reflect-metadata shim is required when using class decorators
// Current fix refference:
// https://github.com/angular/angular-cli/issues/2008#issuecomment-247366275

import './polyfills';

import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { JsonpModule }    from '@angular/http';

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

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    FormsModule,
    JsonpModule
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

class AppModule {
}

// Managing HMR with angular and dom events..
// With this implementation the entire page reloads.
// there is another implementation where only the components that change are reloaded
// see https://github.com/angularclass/angular-hmr

const decorateModuleRef = (modRef: any) => {
  const appRef = modRef.injector.get(ApplicationRef);
  const cmpRef = appRef.components[0];

  enableDebugTools(cmpRef);
  return modRef;
};

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}