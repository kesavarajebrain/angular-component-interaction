import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {
  private currentRole = 'admin'; // from auth service ideally, use the exact dynamic data in real world case

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appHasRole(requiredRole: string) {
    this.viewContainer.clear();
    if (this.currentRole === requiredRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
