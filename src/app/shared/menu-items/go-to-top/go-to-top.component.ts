import {
  Component,
  signal,
  inject,
  DestroyRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { fromEvent, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-go-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss'],
})
export class GoToTopComponent implements AfterViewInit {
  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);

  readonly showButton = signal(false);

  private readonly SCROLL_THRESHOLD = 300;

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(150),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const scrollTop =
          window.scrollY ||
          this.document.documentElement.scrollTop;

        this.showButton.set(scrollTop > this.SCROLL_THRESHOLD);
      });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
