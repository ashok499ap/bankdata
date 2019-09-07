import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map'
const Signup_URL = "https://xsn1pnzfkb.execute-api.us-east-1.amazonaws.com/testing/api/patient/signup";
const Login_URL = "https://xsn1pnzfkb.execute-api.us-east-1.amazonaws.com/testing/api/patient/signin";
// const Append_URL = "https://api.github.com/search/users?q=<searchText>";
const Users_URL = "https://api.github.com/users/<userid>/repos";
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  error: any;
  public anyvalue;
  sendValue: string;
  constructor(private service: MyServiceService, private httpService: MyServiceService, private router: Router, public http: HttpClient) { }

  signup(last_name, first_name, mobile_number, email, password, confirm_password) {

    // console.log(last_name,first_name,middle_name,mobile_number,password)
    let body = { "last_name": last_name, "first_name": first_name, "mobile_number": mobile_number, "email": email, "password": password, "confirm_password": confirm_password }
    console.log(body)
    return this.http.post(Signup_URL, body).map(res => {
      // console.log(res)
      return res as any
    })
  }

  login(email, password) {
    let body = { "email": email, "password": password }
    // console.log("regeiogoie", body)
    return this.http.post(Login_URL, body).map(res => {
      // console.log(res)
      return res as any
    })
  }

  // searchValue1(){
  //   return this.http.get(Append_URL).map(data => {
  //       // console.log('fun called', data)
  //       return data as any
  //   })
  // }
  getApi(){
    return this.http.get(Users_URL).map(data => {
      // console.log('2nd API called', data)
      return data as any;
    })
  }

  appendToValue(value){
      return this.http.get("https://api.github.com/search/users?q=" + value).map(data => {
        console.log('data called', data)
        return data as any;
      })
  }
}

