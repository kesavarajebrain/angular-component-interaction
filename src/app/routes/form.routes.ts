import { Routes } from '@angular/router';

export const FORM_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../forms/forms.component')
                .then(c => c.FormsComponent)
    },
    {
        path: 'template-driven',
        loadComponent: () =>
            import('../forms/template-driven/template-driven.component')
                .then(c => c.TemplateDrivenComponent)
    },
    {
        path: 'reactive',
        loadComponent: () =>
            import('../forms/reactive/reactive.component')
                .then(c => c.ReactiveComponent)
    },
    {
        path: 'advanced-reactive',
        loadComponent: () =>
            import('../forms/advanced-reactive/advanced-reactive.component')
                .then(c => c.AdvancedReactiveComponent)
    },
]