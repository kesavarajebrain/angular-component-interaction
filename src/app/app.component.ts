import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}
declare var adsbygoogle: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {
    // Reload AdSense ads on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.log('AdSense reload error:', e);
        }
      });
  }
}