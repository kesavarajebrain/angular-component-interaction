import { Routes } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input-decorator/input.component';
import { OutputComponent } from './output-decorator/output.component';
import { ServiceComponent } from './service/service.component';

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
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'output',
    component: OutputComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
];
