import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { inject } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

/*
  This variable helps us know whether a refresh token request
  is already running or not.

  English:
  If multiple API calls fail with 401 at the same time,
  we should call the refresh API only once.

  Tamil:
  ஒரே நேரத்தில் பல API calls 401 error கொடுத்தால்,
  refresh API பலமுறை call ஆகாமல் இருக்க இந்த flag பயன்படும்.
*/
let isRefreshing = false;


/*
  BehaviorSubject is used to notify waiting API calls
  when a new access token is available.

  English:
  If multiple requests fail, they will wait here
  until the refresh API gives a new access token.

  Tamil:
  பல API calls fail ஆனாலும்,
  refresh API மூலம் புதிய token வந்ததும்
  அந்த token-ஐ எல்லா waiting requests-க்கும் கொடுக்க இந்த subject பயன்படும்.
*/
const refreshSubject = new BehaviorSubject<string | null>(null);



/*
  Main interceptor function.

  English:
  This function intercepts every HTTP request before it goes to the server.

  Tamil:
  Angular app-இல் இருந்து serverக்கு போகும் எல்லா HTTP requests-ஐ
  இந்த interceptor முதலில் intercept (பிடித்து) செய்கிறது.
*/
export const jwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  // Inject AuthService to access tokens
  const authService = inject(AuthService);

  // Get stored access token from localStorage
  const accessToken = authService.getAccessToken();


  /*
    If access token exists and the request is not login or refresh API,
    attach the Authorization header.

    English:
    We don't attach token for login or refresh APIs.

    Tamil:
    login API மற்றும் refresh API க்கு token attach செய்ய வேண்டாம்.
    மற்ற protected APIs க்கு மட்டும் attach செய்கிறோம்.
  */
  if (accessToken && !req.url.includes('/login') && !req.url.includes('/refresh')) {
    req = addToken(req, accessToken);
  }


  /*
    Send request to server.

    English:
    next(req) sends the request to backend.

    Tamil:
    next(req) என்றால் இந்த request serverக்கு அனுப்பப்படுகிறது.
  */
  return next(req).pipe(

    /*
      catchError catches failed HTTP responses.

      English:
      If server returns error (like 401), we handle it here.

      Tamil:
      server இருந்து error response வந்தால்
      அதை catchError இங்கே handle செய்கிறது.
    */
    catchError((error: HttpErrorResponse) => {

      /*
        If token expired or unauthorized → status 401

        English:
        When token expires, backend returns 401.
        Then we call refresh token API.

        Tamil:
        access token expire ஆனால் backend 401 error தரும்.
        அப்போது refresh API call செய்யப்படுகிறது.
      */
      if (error.status === 401) {
        const refreshToken = authService.getRefreshToken();

        // If refresh token exists → try refresh
        if (refreshToken) {
          return handle401Error(req, next, authService);
        }
      }

      // If other error, just pass it forward
      return throwError(() => error);
    })
  );
};



/*
  addToken function

  English:
  This function clones the original request
  and adds Authorization header with JWT token.

  Tamil:
  original request-ஐ clone செய்து
  Authorization header-ல் JWT token attach செய்கிறது.
*/
function addToken(req: HttpRequest<any>, token: string) {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}



/*
  handle401Error function

  English:
  This function runs when a protected API fails with 401.
  It refreshes the token and retries the original request.

  Tamil:
  protected API 401 error கொடுத்தால்
  இந்த function refresh token API call செய்து
  புதிய token கொண்டு original request-ஐ மீண்டும் call செய்கிறது.
*/
function handle401Error(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService
) {

  /*
    If refresh request is NOT already running
  */
  if (!isRefreshing) {

    // mark refresh process started
    isRefreshing = true;

    // reset subject
    refreshSubject.next(null);

    /*
      Call refresh API

      English:
      Send refresh token to backend to get new access token.

      Tamil:
      refresh token backendக்கு அனுப்பி
      புதிய access token பெறுகிறோம்.
    */
    return authService.refreshToken().pipe(

      /*
        switchMap waits for refresh API response
        and then runs next operation.

        Tamil:
        refresh API முடிந்த பிறகு
        அடுத்த operation switchMap மூலம் run ஆகும்.
      */
      switchMap((res: any) => {

        // refresh completed
        isRefreshing = false;

        /*
          Save new access token

          Tamil:
          backend இருந்து வந்த புதிய access token
          localStorageல் save செய்யப்படுகிறது.
        */
        authService.saveAccessToken(res.accessToken);

        /*
          Some systems also rotate refresh tokens.
          So update refresh token if returned.

          Tamil:
          சில systems refresh token-ஐயும் update செய்யும்.
        */
        if (res?.refreshToken) {
          authService.saveRefreshToken(res?.refreshToken);
        }

        /*
          Notify waiting requests that new token is available
        */
        refreshSubject.next(res.accessToken);

        /*
          RETRY MECHANISM

          English:
          Here we retry the original request with new token.

          Steps:
          1. Take failed request (req)
          2. Attach new token
          3. Send request again

          Tamil:
          இங்கே தான் retry mechanism நடக்கிறது.

          பழைய request-ஐ எடுத்து
          புதிய token attach செய்து
          serverக்கு மறுபடியும் அனுப்புகிறோம்.
        */
        return next(addToken(req, res.accessToken));
      }),

      /*
        If refresh also fails → logout user
      */
      catchError(err => {

        isRefreshing = false;

        // clear tokens
        authService.logout().subscribe(() => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        });

        return throwError(() => err);
      })
    );

  } else {

    /*
      If refresh is already running,
      wait for new token.

      Tamil:
      refresh API ஏற்கனவே run ஆகிக் கொண்டிருந்தால்
      மற்ற requests காத்திருக்க வேண்டும்.
    */
    return refreshSubject.pipe(

      // wait until token available
      filter(token => token !== null),

      // take only first value
      take(1),

      /*
        Retry request after token received

        Tamil:
        புதிய token கிடைத்ததும்
        request மீண்டும் call ஆகும்.
      */
      switchMap(token => next(addToken(req, token!)))
    );

  }
}