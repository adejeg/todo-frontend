import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = 'http://localhost:3000/'

  header = new HttpHeaders({
    "Authorization":JSON.parse(sessionStorage.getItem('me'))
  })
  auth = {
    headers:this.header
  }
  constructor(private http:HttpClient) {
  }

  createItem(data, endpoint){
    return this.http.post(this.url + endpoint, data).toPromise()
  }
  
  getItem(endpoint){
    return this.http.get(this.url + endpoint).toPromise()
  }
  
  updateItem(id, data, endpoint){
    return this.http.patch(this.url + endpoint, data).toPromise()
  }
  
  deleteItem(id, endpoint){
    return this.http.delete(this.url + endpoint).toPromise()
  }

  createAuthItem(data, endpoint){
    return this.http.post(this.url + endpoint, data, this.auth).toPromise()
  }
  
  getAuthItem(endpoint){
    return this.http.get(this.url + endpoint, this.auth).toPromise()
  }
  
  updateAuthItem(id, data, endpoint){
    return this.http.patch(this.url + endpoint, data, this.auth).toPromise()
  }
  
  deleteAuthItem(id, endpoint){
    return this.http.delete(this.url + endpoint, this.auth).toPromise()
  }
}
