import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; //for http requests
import { environment } from '../../environments/environment'; //read environmant constant

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private loginAPI = environment.apiUrl + 'users/login';
  constructor(private httpClient : HttpClient) { 
    console.log(this.httpClient)
  }


  login(params){
    return this.httpClient.post(this.loginAPI, params).toPromise();
  }
}
