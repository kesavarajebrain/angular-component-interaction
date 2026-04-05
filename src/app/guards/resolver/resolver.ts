import { ResolveFn } from '@angular/router';
import { ApiService } from '../../service/API/api.service';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<any> = (route) => {

  const userService = inject(ApiService)

  // api call here
  return userService.getUsers();

  // const id = route.paramMap.get('id');

  // console.log('API CALL for ID:', id);

  // Simulate API
  // return {
  //   id,
  //   name: 'User ' + id,
  //   message: 'This data getting from resolver'
  // };
};