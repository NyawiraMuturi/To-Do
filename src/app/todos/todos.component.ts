import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  showValidationErrors: boolean
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm){
    if(form.invalid) return this.showValidationErrors=true

    this.dataService.addTodo(new Todo(form.value.text))

    this.showValidationErrors=false
    form.reset()
  }

  onTodoClicked(todo: Todo){
    this.todoClicked.emit()
    todo.completed = !todo.completed;
  }

  onDeleteClicked(todo: Todo){
    this.deleteClicked.emit()
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }
}
