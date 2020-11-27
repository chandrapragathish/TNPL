import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


import { Login } from '../Properties/login'

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  login: Login;
  constructor(private http : HttpClient) { }
  validateLogin(lgn:Login){
    var body = JSON.stringify(lgn);
    debugger
    // let headers =new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');
    //  return this.http.post<any>(`http://localhost:14584/api/Login/Login`, body,{headers: headers});
     this.http.post<any>('https://jsonplaceholder.typicode.com/invalid-url', { title: 'Angular POST Request Example' }).subscribe({
      next: data1 => {
          return data1.id;
      }
     
  })
  }
}
