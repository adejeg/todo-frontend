import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTodo:FormGroup;
  todos: any;
  constructor(private fb:FormBuilder, private crudService:CrudService, private router:Router) { 
    this.newTodo = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      status:[Boolean]
    })
  }

  ngOnInit(): void {
    this.getTodos()
  }
  
  async getTodos(){
    this.todos = await this.crudService.getAuthItem('todo');
  }
  async createTodo(){
    let createdTodo = await this.crudService.createAuthItem(this.newTodo.value, 'todo')
    this.getTodos()
  }

  async logout(){
    // let token = JSON.parse(sessionStorage.getItem('me')).token
    // await this.crudService.createAuthItem('users/logout', token)
    // sessionStorage.clear()
    // this.router.navigate(['/'])
  }
}
