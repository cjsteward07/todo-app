import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import { ITodo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  todoList : ITodo[] = [
    {task: "Do Laundry", completed: true},
    {task: "Do Dishes", completed: false},
    {task: "Buy Milk", completed: false},
    {task: "Clean House", completed: true}
  ]

  constructor() { }

  getTodoList(): ITodo[] {
    return this.todoList;
  }
}
