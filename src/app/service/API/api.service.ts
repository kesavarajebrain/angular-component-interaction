import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private readonly backEndURL = 'https://us-central1-firenodeapp-84a3f.cloudfunctions.net/app';

  getPrograms() {
    return this.http.get<{
      status: boolean;
      msg: string;
      result: any[];
    }>(this.backEndURL + '/api/getLiveListSchedules');
  }

  getUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
