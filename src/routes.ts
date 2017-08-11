import { HomeViewComponent } from './views/home/home';
import { AboutViewComponent } from './views/about/about';

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', component: <any>HomeViewComponent },
  { path: 'home', component: <any> HomeViewComponent },
  { path: 'about', component: <any> AboutViewComponent }
];