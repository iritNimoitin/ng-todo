import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 

  private mock: ITodo[] =[{"title":"Turkey, common","description":"Gembucket","isCompleted":false,"isArchived":false,"endDate":"1/11/2022"},
  {"title":"Macaque, bonnet","description":"Duobam","isCompleted":false,"isArchived":true,"endDate":"6/14/2022"},
  {"title":"Aardwolf","description":"Daltfresh","isCompleted":false,"isArchived":true,"endDate":"7/3/2022"},
  {"title":"Pie, indian tree","description":"Keylex","isCompleted":true,"isArchived":true,"endDate":"5/15/2022"},
  {"title":"African black crake","description":"Otcom","isCompleted":true,"isArchived":true,"endDate":"4/25/2022"},
  {"title":"Lechwe, kafue flats","description":"Konklux","isCompleted":true,"isArchived":true,"endDate":"11/2/2021"},
  {"title":"European stork","description":"Duobam","isCompleted":false,"isArchived":false,"endDate":"8/15/2022"},
  {"title":"Green heron","description":"Bitwolf","isCompleted":false,"isArchived":true,"endDate":"10/18/2021"},
  {"title":"Chimpanzee","description":"Y-Solowarm","isCompleted":false,"isArchived":true,"endDate":"11/19/2021"},
  {"title":"Hudsonian godwit","description":"It","isCompleted":false,"isArchived":false,"endDate":"3/21/2022"}]

  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();

  }
}
