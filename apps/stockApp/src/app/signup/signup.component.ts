import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../userInfoModel';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../form/form.component.css']
})
export class SignupComponent{

  user: UserInfoModel = new UserInfoModel("test@gmail.com", "admin", "password",0,["tst",0,0]);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addUser(login:any){
    //console.log(JSON.stringify(login.value));
    //console.log(this.http.post('http://localhost:3000/signup', JSON.stringify(login.value)));
    console.log(this.http.post('http://localhost:3000/signup', login.value));

    return this.http.post('http://localhost:3000/signup', login.value).subscribe(data => {
      data = this.user;
  })
  }

}
