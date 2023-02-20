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
  title:string = "To-do Lab";

  todoList: ITodo[] = [];
  constructor(private todoRepo: TodoRepositoryService) {}

  ngOnInit(): void{
    this.todoList = this.todoRepo.getTodoList();
  }

  addTask(form: NgForm) : void {
    let newTaskName = form.form.value.item;
    let newTask : ITodo = { task : newTaskName, completed : false }
    this.todoList.push(newTask);
  }

  completeTask(itemIndex: number) : void {
    this.todoList[itemIndex].completed = true;
  }

  // incompleteTask(itemIndex: number) : void {
  //   this.todoList[itemIndex].completed = false;
  // }
}
