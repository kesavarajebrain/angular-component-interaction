import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSource = new BehaviorSubject<any>(null); // Initial value
  currentData = this.dataSource.asObservable();
  constructor() {}

  setData(data: any) {
    this.dataSource.next(data); // Emit new data to all subscribers
  }
}
