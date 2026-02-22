import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { programsReducer } from './store/reducers/programs.reducer';
import { ProgramsEffects } from './store/effects/programs.effects';
import { userReducer } from './store/reducers/users.reducer';
import { UserEffects } from './store/effects/users.effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { jwtInterceptor } from './interceptor/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(
    {
      programs: programsReducer,
      users: userReducer,
    }
  ), provideEffects(
    [ProgramsEffects, UserEffects]
  ), provideHttpClient(
    withInterceptors([jwtInterceptor])
  ), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideClientHydration()]
};
