import { Injectable } from "@angular/core";
@Injectable()
export class DependencyInjectionService {

  constructor() {
    
  }

  getMsg(){
    return 'Msg from dependency injection service';
  }

}
