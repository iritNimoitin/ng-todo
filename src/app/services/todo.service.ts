import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 

  private mock: ITodo[] =[{"id":1,"title":"Turkey, common","description":"Gembucket","isCompleted":false,"isArchived":false,"endDate":"1/11/2022",selected:true},
  {"id":2,"title":"Macaque, bonnet","description":"Duobam","isCompleted":false,"isArchived":true,"endDate":"6/14/2022",selected:false},
  {"id":3,"title":"Aardwolf","description":"Daltfresh","isCompleted":false,"isArchived":true,"endDate":"7/3/2022",selected:false},
  {"id":4,"title":"Pie, indian tree","description":"Keylex","isCompleted":false,"isArchived":true,"endDate":"5/15/2022",selected:false},
  {"id":5,"title":"African black crake","description":"Otcom","isCompleted":false,"isArchived":true,"endDate":"4/25/2022",selected:false},
  {"id":6,"title":"Lechwe, kafue flats","description":"Konklux","isCompleted":false,"isArchived":true,"endDate":"11/2/2021",selected:false},
  {"id":7,"title":"European stork","description":"Duobam","isCompleted":false,"isArchived":false,"endDate":"8/15/2022",selected:false},
  {"id":8,"title":"Green heron","description":"Bitwolf","isCompleted":false,"isArchived":true,"endDate":"10/18/2021",selected:false},
  {"id":9,"title":"Chimpanzee","description":"Y-Solowarm","isCompleted":false,"isArchived":true,"endDate":"11/19/2021",selected:false},
  {"id":10,"title":"Hudsonian godwit","description":"It","isCompleted":false,"isArchived":false,"endDate":"3/21/2022",selected:false}]

  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  private _singleTodoSubject : BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();

  }
  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }
  public setSelectedTodo(todo:ITodo){
    this._singleTodoSubject.next(todo);
  }

}
