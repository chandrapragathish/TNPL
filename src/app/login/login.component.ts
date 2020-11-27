import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import {Service1Service} from '../Service/service1.service';

@Component({
  selector: 'EMS-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public service1:Service1Service ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.service1.login = {
      Username: '',
      Password: ''
    }
  }
  Login(form: NgForm) {
    
    var data= this.service1.validateLogin(form.value);
    debugger
  }
}
