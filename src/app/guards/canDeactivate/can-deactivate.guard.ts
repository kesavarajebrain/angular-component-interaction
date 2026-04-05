import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  console.log('CAN DEACTIVE', component.hasUnsavedChanges)
  console.log('CAN DEACTIVE function', component.hasUnsavedChanges())
  if (component.hasUnsavedChanges && (component.hasUnsavedChanges() || component.hasUnsavedChanges() === undefined)) {
    return confirm('You have unsaved changes. Leave?');
  }
  return true;
};
