import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helper = new JwtHelperService
  me = JSON.parse(sessionStorage.getItem('me'))
  constructor() { }

  
  isAuthenticated(){
    if (!this.me) {
      return false
    }
    
    let token = this.me.token.replace('Bearer ', '')
    
    let isExpired = this.helper.isTokenExpired(token)
    
    if (isExpired === false){
      return true
    }else{
      return false
    }
  }
}