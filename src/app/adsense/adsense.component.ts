import { Component, Input, AfterViewInit } from '@angular/core';

declare var adsbygoogle: any;

@Component({
  selector: 'app-adsense',
  standalone:true,
  template: `
    <ins class="adsbygoogle"
      [attr.data-ad-client]="adClient"
      [attr.data-ad-slot]="adSlot"
      [attr.data-ad-format]="adFormat"
      [attr.data-full-width-responsive]="fullWidthResponsive">
    </ins>
  `,
  styles: [`
    ins.adsbygoogle {
      display: block;
      text-align: center;
    }
  `]
})
export class AdsenseComponent implements AfterViewInit {
  
  @Input() adClient!: string;
  @Input() adSlot!: string;
  @Input() adFormat: string = 'auto';
  @Input() fullWidthResponsive: string = 'true';

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsense error:', e);
      }
    }, 500);
  }
}
