import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') form:NgForm;

  public minDate: Date = new Date()
  
  constructor(public dialog:MatDialog,private todoService: TodoService) { }

  ngOnInit(): void {
  }
  public onNewTodoSubmit():void{

    if(this.form.valid){
    //create the new todo obj
    const formValues = this.form.form.value;

    const newTodo:ITodo =  {
      id:uuidv4(),
      title: formValues.title,
      description:formValues.description,
      endDate:formValues.date,
      isCompleted:false,
      isArchived:false,
      selected:false
    }
    //send object to service
    this.todoService.addNewTodo(newTodo);
    this.dialog.closeAll();
    }
 }
      
}
