import { NgModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapComponent } from './components/bootstrap/bootstrap.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BootstrapComponent ],
  exports:      [ BootstrapComponent ],
  bootstrap:    [ BootstrapComponent ]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule); 