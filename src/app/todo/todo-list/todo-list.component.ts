import { Component } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: ITodo[] = [];
  constructor(private todoRepo: TodoRepositoryService) {}

  ngOnInit(): void{
    this.todoList = this.todoRepo.getTodoList();
  }
}
