import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  
  
  constructor(private todoService: TodoService) {
  }
  
  ngOnInit() {
    this.todoService.getTodos(10).subscribe(todos => {
      this.todos = todos;
    });
  }
  
  deleteTodo(todo: Todo) {
    //Delete in UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Delete on server
    this.todoService.deleteTodo(todo).subscribe();
  }
  
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
