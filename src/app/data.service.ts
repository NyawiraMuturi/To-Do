import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[]= [
    new Todo("Today I Dont feel like doing anything"),
    new Todo("Today has been such a good day. I landed my first coding job an I love it.")
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }
  addTodo(todo: Todo){
    this.todos.push(todo)
  }
  updateTodo(index:number, updatedTodo: Todo){
    this.todos[index] = updatedTodo
  }
  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
