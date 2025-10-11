import { Component, AfterContentChecked, ContentChild, ElementRef,AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements AfterContentChecked, AfterContentInit {

  @ContentChild('alertBlock', { read: ElementRef }) alertEl!: ElementRef;

  private previousType = '';
  private previousMessage = '';

  ngAfterContentInit(): void {
    // alert('ngAfterContentInit')
    const el = this.alertEl?.nativeElement;
    if (!el) return;

    const currentType = el.getAttribute('data-type');
    if(currentType =='error'){
      alert('SERVER DOWN!!')
    }
  }

  ngAfterContentChecked() {
    // alert('ngAfterContentChecked')
    const el = this.alertEl?.nativeElement;
    if (!el) return;

    const currentType = el.getAttribute('data-type');
    const currentMessage = el.textContent.trim();
    if(currentType =='error'){
      alert('SERVER DOWN!!')
    }

    // Detect if something changed from parent
    if (currentType !== this.previousType || currentMessage !== this.previousMessage) {
      console.log('🔁 Projected content changed from parent!');
      console.log('Type:', currentType, 'Message:', currentMessage);
      console.log('element ->',el)
      // Simulate manipulation (for example, color or transformation)
      el.style.color = this.getColor(currentType);
      el.style.fontWeight = 'bold';
      el.style.transition = '0.3s';
      
      // Save previous state
      this.previousType = currentType;
      this.previousMessage = currentMessage;
    }
  }

  private getColor(type: string) {
    switch (type) {
      case 'info': return 'dodgerblue';
      case 'warning': return 'orange';
      case 'success': return 'green';
      case 'error': return 'red';
      case 'secondary': return 'grey';
      default: return 'black';
    }
  }
}
