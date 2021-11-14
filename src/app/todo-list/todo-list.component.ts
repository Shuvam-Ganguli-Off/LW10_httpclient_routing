import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public temp:any = [];
  constructor(public todoInfo: TodoServiceService) { }

  ngOnInit(): void {
    this.temp = this.todoInfo.getTodo()
  }

}
