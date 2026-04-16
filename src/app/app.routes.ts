import { Routes } from '@angular/router';
import { authGuard } from './guards/canActivate/auth.guard';
import { canDeactivateGuard } from './guards/canDeactivate/can-deactivate.guard';
import { userResolver } from './guards/resolver/resolver';

const title = 'Angular Tutori.. By K7';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: title,
    loadComponent: () =>
      import('./home/home.component').then(a => a.HomeComponent)
  },
  {
    path: 'how-it-works',
    title: title,
    loadComponent: () =>
      import('./angular-works/angular-works.component').then(a => a.AngularWorksComponent),

  },
  {
    path: 'viewchild',
    title: title + '/View Child',
    loadComponent: () =>
      import('./view-child/view-child.component').then(a => a.ViewChildComponent),

  },
  {
    path: 'input',
    title: title + '/Input',
    loadComponent: () =>
      import('./input-decorator/input.component').then(a => a.InputComponent)
  },
  {
    path: 'output',
    title: title + '/Output',
    loadComponent: () =>
      import('./output-decorator/output.component').then(a => a.OutputComponent)
  },
  {
    path: 'service',
    title: title + '/service',
    loadComponent: () =>
      import('./service/service.component').then(a => a.ServiceComponent)
  },
  {
    path: 'lifecycle-hooks',
    title: title + '/Hooks',
    loadChildren: () =>
      import('./routes/lifecycle.routes').then(m => m.LIFE_CYCLE_ROUTES)
  },

  {
    path: 'change-detection',
    title: title + '/CD',
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
    title: title + '/DI',
    loadComponent: () =>
      import('./dependency-injection/dependency-injection.component')
        .then(c => c.DependencyInjectionComponent)
  },
  {
    path: 'pipe',
    title: title,
    loadComponent: () =>
      import('./pipes/pipes.component')
        .then(c => c.PipesComponent)
  },
  {
    path: 'directives',
    title: title,
    loadComponent: () =>
      import('./directives/directives.component')
        .then(c => c.DirectivesComponent)
  },
  {
    path: 'forms',
    title: title,
    loadChildren: () =>
      import('./routes/form.routes').then(m => m.FORM_ROUTES)
  },
  {
    path: 'dynamic-rendering',
    title: title,
    loadComponent: () =>
      import('./dynamic-rendering/dynamic-render.component')
        .then(c => c.Dynamicrender)
  },
  {
    path: 'standalone',
    title: title,
    loadComponent: () =>
      import('./standalone/standalone.component')
        .then(c => c.StandaloneComponent)
  },
  {
    path: 'ngrx',
    title: title + '-Ngrx',
    loadComponent: () =>
      import('./ngrx/ngrx.component')
        .then(c => c.NgrxComponent)
  },
  {
    path: 'ngrx-example',
    title: title,
    loadComponent: () =>
      import('./ngrx/ngrx-example/ngrx-example.component')
        .then(c => c.NgrxExampleComponent)
  },
  {
    path: 'web-socket',
    title: title + '-WS',
    loadComponent: () =>
      import('./web-socket/web-socket.component')
        .then(c => c.WebSocketComponent)
  },
  {
    path: 'ssr',
    title: title + ' - SSR',
    loadComponent: () =>
      import('./ssr/ssr.component')
        .then(c => c.SsrComponent)
  },
  {
    path: 'jwt',
    title: title + ' -JWT',
    loadComponent: () =>
      import('./jwt/jwt.component')
        .then(c => c.JwtComponent)
  },
  {
    path: 'lazy-load',
    title: title + ' -lazy-load',
    loadComponent: () =>
      import('./lazy-load/lazy-load.component')
        .then(c => c.LazyLoadComponent)
  },
  {
    path: 'routing',
    title: title + '-ROUTING',
    loadComponent: () =>
      import('./routing/routing.component')
        .then(c => c.RoutingComponent)
  },
  {
    path: 'routing/:id',
    title: title,
    loadComponent: () =>
      import('./routing/routing-id/routing-id.component')
        .then(c => c.RoutingIdComponent)
  },
  {
    path: 'routing/:category/:id',
    title: title,
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
    title: title,
    canActivate: [authGuard],
    resolve: {
      user: userResolver
    },
    loadComponent: () =>
      import('./secure-pages/secure-pages.component')
        .then(c => c.SecurePagesComponent)
  },
  {
    path: 'compilation',
    title: title,
    loadComponent: () =>
      import('./compilation/compilation.component')
        .then(c => c.CompilationComponent)
  },
];