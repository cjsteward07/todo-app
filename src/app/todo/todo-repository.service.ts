import { Injectable } from '@angular/core';
import { ITodo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  todoList : ITodo[] = [
    {task: "laundry", completed: false},
    {task: "dishes", completed: true}
  ]

  constructor() { }

  getTodoList(): ITodo[] {
    return this.todoList;
  }
}



