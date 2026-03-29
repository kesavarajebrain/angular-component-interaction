
import { Routes } from "@angular/router";

export const SIGNAL_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../signal/signal.component')
                .then(c => c.SignalComponent),
    },
    {
        path: 'advanced-signal',
        loadComponent: () =>
            import('../signal/advanced-signals/advanced-signals.component')
                .then(c => c.AdvancedSignalsComponent),
    },
    {
        path: 'signal-form',
        loadComponent: () =>
            import('../signal/signal-form/signal-form.component')
                .then(c => c.SignalFormComponent),
    }
]
