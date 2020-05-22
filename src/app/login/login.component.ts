import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  signUpForm:FormGroup
  resetForm:FormGroup
  constructor(private fb:FormBuilder, private crudService:CrudService, private router: Router) {
    this.loginForm = this.fb.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.min(7), Validators.required]]
    })

    this.signUpForm = this.fb.group({
      name:["", [Validators.required]],
      email:["", [Validators.email, Validators.required]],
      password:["", [Validators.required]]
    })

    this.resetForm = this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async loginUser(){
    const user:any = await this.crudService.createItem(this.loginForm.value, 'users/login')
    sessionStorage.setItem('me', user.token);
    this.router.navigate(['/todo'])
  }

  async signUpUser(){
    const user:any = await this.crudService.createItem(this.signUpForm.value, 'users')
    sessionStorage.setItem('me', user.token)
    this.router.navigate(['/todo'])
  }

  resetUser(){
    console.log(this.resetForm.value);
  }

}