import { Routes } from "@angular/router";

export const LIFE_CYCLE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../lifecycle-hooks/lifecycle-hooks.component')
                .then(c => c.LifecycleHooksComponent)
    },
    {
        path: 'ngOnInit',
        loadComponent: () =>
            import('../lifecycle-hooks/ngoninit/ngoninit.component')
                .then(c => c.NgoninitComponent)
    },
    {
        path: 'constructor',
        loadComponent: () =>
            import('../lifecycle-hooks/constructor/constructor.component')
                .then(c => c.ConstructorComponent)
    },
    {
        path: 'ngOnChanges',
        loadComponent: () =>
            import('../lifecycle-hooks/ngonchanges/ngonchanges.component')
                .then(c => c.NgonchangesComponent)
    },
    {
        path: 'ngDoCheck',
        loadComponent: () =>
            import('../lifecycle-hooks/ngdocheck/ngdocheck.component')
                .then(c => c.NgdocheckComponent)
    },
    {
        path: 'ngAfterContentInit',
        loadComponent: () =>
            import('../lifecycle-hooks/ngaftercontentinit/ngaftercontentinit.component')
                .then(c => c.NgaftercontentinitComponent)
    },
    {
        path: 'ngAfterContentChecked',
        loadComponent: () =>
            import('../lifecycle-hooks/ngaftercontentchecked/ngaftercontentchecked.component')
                .then(c => c.NgaftercontentcheckedComponent)
    },
    {
        path: 'ngAfterViewInit',
        loadComponent: () =>
            import('../lifecycle-hooks/ngafterviewinit/ngafterviewinit.component')
                .then(c => c.NgafterviewinitComponent)
    },
    {
        path: 'ngAfterViewChecked',
        loadComponent: () =>
            import('../lifecycle-hooks/ngafterviewchecked/ngafterviewchecked.component')
                .then(c => c.NgafterviewcheckedComponent)
    },
    {
        path: 'ngOnDestroy',
        loadComponent: () =>
            import('../lifecycle-hooks/ngondestroy/ngondestroy.component')
                .then(c => c.NgondestroyComponent)
    },
]