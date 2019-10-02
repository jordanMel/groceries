import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },

];

export const navComponents = [
  HomeComponent,
  LoginComponent,
  ListComponent

];
