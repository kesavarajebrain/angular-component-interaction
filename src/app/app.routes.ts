import { Routes } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input-decorator/input.component';
import { OutputComponent } from './output-decorator/output.component';
import { ServiceComponent } from './service/service.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ConstructorComponent } from './lifecycle-hooks/constructor/constructor.component';
import { NgoninitComponent } from './lifecycle-hooks/ngoninit/ngoninit.component';
import { NgonchangesComponent } from './lifecycle-hooks/ngonchanges/ngonchanges.component';
import { NgdocheckComponent } from './lifecycle-hooks/ngdocheck/ngdocheck.component';
import { NgaftercontentinitComponent } from './lifecycle-hooks/ngaftercontentinit/ngaftercontentinit.component';
import { NgaftercontentcheckedComponent } from './lifecycle-hooks/ngaftercontentchecked/ngaftercontentchecked.component';
import { NgafterviewinitComponent } from './lifecycle-hooks/ngafterviewinit/ngafterviewinit.component';
import { NgafterviewcheckedComponent } from './lifecycle-hooks/ngafterviewchecked/ngafterviewchecked.component';
import { NgondestroyComponent } from './lifecycle-hooks/ngondestroy/ngondestroy.component';

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
   {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
  },
    {
    path: 'lifecycle-hooks/constructor',
    component: ConstructorComponent
  },
    {
    path: 'lifecycle-hooks/ngOnInit',
    component: NgoninitComponent
  },
    {
    path: 'lifecycle-hooks/ngOnChanges',
    component: NgonchangesComponent
  },
    {
    path: 'lifecycle-hooks/ngDoCheck',
    component: NgdocheckComponent
  },
   {
    path: 'lifecycle-hooks/ngAfterContentInit',
    component: NgaftercontentinitComponent
  },
  {
    path: 'lifecycle-hooks/ngAfterContentChecked',
    component: NgaftercontentcheckedComponent
  },
   {
    path: 'lifecycle-hooks/ngAfterViewInit',
    component: NgafterviewinitComponent
  },
   {
    path: 'lifecycle-hooks/ngAfterViewChecked',
    component: NgafterviewcheckedComponent
  },
   {
    path: 'lifecycle-hooks/ngOnDestroy',
    component: NgondestroyComponent
  }
];