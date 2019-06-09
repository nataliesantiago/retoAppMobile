import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  APIURL = 'http://localhost:3000/api';

  constructor(private httpService: HttpClient) {

  }

  createUser(newUser){
    const URL = `${this.APIURL}/users/create-user`;
    return this.httpService.post(URL, newUser)
      .pipe(map( response => {
        return response;
      }));
  }

  getUsers(){
    const URL = `${this.APIURL}/users/get-users`;
    return this.httpService.get(URL)
      .pipe(map( response => {
        return response;
      }));
  }

  searchUser(user){
    const URL = `${this.APIURL}/users/search-user`;
    return this.httpService.post(URL, user)
      .pipe(map( response => {
        return response;
      }));
  }

  deleteUser(id){
    const URL = `${this.APIURL}/users/delete-user/${id}`;
    const BODY = {};
    return this.httpService.post(URL, BODY)
      .pipe(map( response => {
        return response;
    }));
  }

  getHobbiesUser(id){
    const URL = `${this.APIURL}/users/search-hobbie/${id}`;
    const BODY = {};
    return this.httpService.post(URL, BODY)
      .pipe(map( response => {
        return response;
    }));
  }

  getHobbies(){
    const URL = `${this.APIURL}/hobbies/get-hobbies`;
    return this.httpService.get(URL)
      .pipe(map( response => {
        return response;
    }));
  }

}
