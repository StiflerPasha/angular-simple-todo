import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  title: string;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  onSubmit() {
    const todo: Todo = {
      title: this.title,
      completed: false,
      id: null
    };
    
    this.addTodo.emit(todo);
    this.title = '';
  }
}
