import { Routes } from '@angular/router';
import { authGuard } from './guards/canActivate/auth.guard';
import { canDeactivateGuard } from './guards/canDeactivate/can-deactivate.guard';
import { userResolver } from './guards/resolver/resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Angular Tutor.. By K7',
    loadComponent: () =>
      import('./home/home.component').then(a => a.HomeComponent)
  },
  {
    path: 'how-it-works',
    title: 'Angular Tutor.. By K7',
    loadComponent: () =>
      import('./angular-works/angular-works.component').then(a => a.AngularWorksComponent),

  },
  {
    path: 'viewchild',
    title: 'Angular Tutor.. By K7/View Child',
    loadComponent: () =>
      import('./view-child/view-child.component').then(a => a.ViewChildComponent),

  },
  {
    path: 'input',
    title: 'Angular Tutor.. By K7/Input',
    loadComponent: () =>
      import('./input-decorator/input.component').then(a => a.InputComponent)
  },
  {
    path: 'output',
    title: 'Angular Tutor.. By K7/Output',
    loadComponent: () =>
      import('./output-decorator/output.component').then(a => a.OutputComponent)
  },
  {
    path: 'service',
    title: 'Angular Tutor.. By K7/service',
    loadComponent: () =>
      import('./service/service.component').then(a => a.ServiceComponent)
  },
  {
    path: 'lifecycle-hooks',
    title: 'Angular Tutor.. By K7/Hooks',
    loadChildren: () =>
      import('./routes/lifecycle.routes').then(m => m.LIFE_CYCLE_ROUTES)
  },

  {
    path: 'change-detection',
    title: 'Angular Tutor.. By K7/CD',
    loadComponent: () =>
      import('./change-detection/change-detection.component')
        .then(c => c.ChangeDetectionComponent)
  },
  {
    path: 'signal',
    title: 'signal',
    loadChildren: () =>
      import('./routes/signal.routes').then(m => m.SIGNAL_ROUTES)
  },
  {
    path: 'dependency-injection',
    title: 'Angular Tutor.. By K7 /DI',
    loadComponent: () =>
      import('./dependency-injection/dependency-injection.component')
        .then(c => c.DependencyInjectionComponent)
  },
  {
    path: 'pipe',
    title: 'Angular Tutor.. By K7',
    loadComponent: () =>
      import('./pipes/pipes.component')
        .then(c => c.PipesComponent)
  },
  {
    path: 'directives',
    title: 'Angular Tutor.. By K7',
    loadComponent: () =>
      import('./directives/directives.component')
        .then(c => c.DirectivesComponent)
  },
  {
    path: 'forms',
    title: 'Angular Tutor.. By K7',
    loadChildren: () =>
      import('./routes/form.routes').then(m => m.FORM_ROUTES)
  },
  {
    path: 'dynamic-rendering',
    loadComponent: () =>
      import('./dynamic-rendering/dynamic-render.component')
        .then(c => c.Dynamicrender)
  },
  {
    path: 'standalone',
    loadComponent: () =>
      import('./standalone/standalone.component')
        .then(c => c.StandaloneComponent)
  },
  {
    path: 'ngrx',
    title: 'Angular Tutor..By K7/Ngrx',
    loadComponent: () =>
      import('./ngrx/ngrx.component')
        .then(c => c.NgrxComponent)
  },
  {
    path: 'ngrx-example',
    loadComponent: () =>
      import('./ngrx/ngrx-example/ngrx-example.component')
        .then(c => c.NgrxExampleComponent)
  },
  {
    path: 'web-socket',
    title: 'Angular Tutor.. By K7 -WS',
    loadComponent: () =>
      import('./web-socket/web-socket.component')
        .then(c => c.WebSocketComponent)
  },
  {
    path: 'ssr',
    title: 'Angular Tutor.. By K7 - SSR',
    loadComponent: () =>
      import('./ssr/ssr.component')
        .then(c => c.SsrComponent)
  },
  {
    path: 'jwt',
    title: 'Angular Tutor.. By K7 -JWT',
    loadComponent: () =>
      import('./jwt/jwt.component')
        .then(c => c.JwtComponent)
  },
  {
    path: 'lazy-load',
    title: 'Angular Tutor.. By K7 -lazy-load',
    loadComponent: () =>
      import('./lazy-load/lazy-load.component')
        .then(c => c.LazyLoadComponent)
  },
  {
    path: 'routing',
    title: 'Angular Tutorial By K7 -ROUTING',
    loadComponent: () =>
      import('./routing/routing.component')
        .then(c => c.RoutingComponent)
  },
  {
    path: 'routing/:id',
    loadComponent: () =>
      import('./routing/routing-id/routing-id.component')
        .then(c => c.RoutingIdComponent)
  },
  {
    path: 'routing/:category/:id',
    loadComponent: () =>
      import('./routing/routing-id/routing-id.component')
        .then(c => c.RoutingIdComponent)
  },
  {
    path: 'route-controls',
    canDeactivate: [canDeactivateGuard],
    title: 'ROUTING CONTROLS',
    loadComponent: () =>
      import('./routing/rounting-controls/rounting-controls.component')
        .then(c => c.RountingControlsComponent)
  },
  {
    path: 'secure-page',
    title: 'Angular Tutorial By K7',
    canActivate: [authGuard],
    resolve: {
      user: userResolver
    },
    loadComponent: () =>
      import('./secure-pages/secure-pages.component')
        .then(c => c.SecurePagesComponent)
  },
];