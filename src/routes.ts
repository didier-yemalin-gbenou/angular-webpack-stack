import { HomeViewComponent } from './views/home/home';
import { AboutViewComponent } from './views/about/about';

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'about', component: AboutViewComponent }
];
