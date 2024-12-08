import { Routes } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'viewchild',
    component: ViewChildComponent,
  },
];
