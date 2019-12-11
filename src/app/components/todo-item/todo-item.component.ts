import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService: TodoService) {
  }
  
  ngOnInit() {
  }
  
  setClasses() {
    return {
      'todo': true,
      'is-completed': this.todo.completed
    };
  }
  
  onToggle(todo: Todo) {
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe();
  }
  
  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
