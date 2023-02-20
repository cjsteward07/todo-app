import { Component } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import { ITodo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
[x: string]: any;

  todoList: ITodo[] = [];
  constructor(private todoRepo: TodoRepositoryService) {}

  ngOnInit(): void{
    this.todoList = this.todoRepo.getTodoList();
  }

  addTask(form: NgForm) {
    let newtodo = { task: form.value.task, completed: false }
    this.todoList.push(newtodo);
  }

  completeTask(i: number) {
    this.todoList[i].completed = true
  }
}
