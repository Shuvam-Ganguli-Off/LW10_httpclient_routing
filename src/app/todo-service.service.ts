import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  public list = [
    {"Sl":1,"Item":"Pen","Price":"20"},
    {"Sl":2,"Item":"Pencil","Price":"5"},
    {"Sl":3,"Item":"Rubber","Price":"10"},
    {"Sl":4,"Item":"Copy","Price":"50"},
    {"Sl":5,"Item":"Book","Price":"100"}
  ]

  getTodo(){
    return this.list;
  }
  constructor() { }
}
