import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then(a => a.HomeComponent)
  },
  {
    path: 'viewchild',
    loadComponent: () =>
      import('./view-child/view-child.component').then(a => a.ViewChildComponent),
    
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./input-decorator/input.component').then(a => a.InputComponent)
  },
  {
    path: 'output',
    loadComponent: () =>
      import('./output-decorator/output.component').then(a => a.OutputComponent)
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./service/service.component').then(a => a.ServiceComponent)
  },
  {
    path: 'lifecycle-hooks',
    loadChildren: () =>
      import('./routes/lifecycle.routes').then(m => m.LIFE_CYCLE_ROUTES)
  },

  {
    path: 'change-detection',
    loadComponent: () =>
      import('./change-detection/change-detection.component')
        .then(c => c.ChangeDetectionComponent)
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./signal/signal.component')
        .then(c => c.SignalComponent),

    children: [
      {
        path: 'advanced-signal',
        loadComponent: () =>
          import('./signal/advanced-signals/advanced-signals.component')
            .then(c => c.AdvancedSignalsComponent),
      },
      {
        path: 'signal-form',
        loadComponent: () =>
          import('./signal/signal-form/signal-form.component')
            .then(c => c.SignalFormComponent),
      }
    ]
  },
  {
    path: 'dependency-injection',
    loadComponent: () =>
      import('./dependency-injection/dependency-injection.component')
        .then(c => c.DependencyInjectionComponent)
  },
  {
    path: 'pipe',
    loadComponent: () =>
      import('./pipes/pipes.component')
        .then(c => c.PipesComponent)
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('./directives/directives.component')
        .then(c => c.DirectivesComponent)
  },
  {
    path: 'forms',
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
    loadComponent: () =>
      import('./web-socket/web-socket.component')
        .then(c => c.WebSocketComponent)
  },
  {
    path: 'ssr',
    loadComponent: () =>
      import('./ssr/ssr.component')
        .then(c => c.SsrComponent)
  },
  {
    path: 'jwt',
    loadComponent: () =>
      import('./jwt/jwt.component')
        .then(c => c.JwtComponent)
  },
   {
    path: 'lazy-load',
    loadComponent: () =>
      import('./lazy-load/lazy-load.component')
        .then(c => c.LazyLoadComponent)
  },
   {
    path: 'routing',
    loadComponent: () =>
      import('./routing/routing.component')
        .then(c => c.RoutingComponent)
  },
];