import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';



import { TaskButtonsComponent } from '../task-buttons/task-buttons.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule,TaskButtonsComponent ,NgClass,],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
taskTitle = '';

@Output() taskAdd =new EventEmitter<any>();

addTask(){
  if(this.taskTitle){

    const newTask = {id:Date.now(),title:this.taskTitle}
    console.log("adding Task" ,newTask);
    this.taskAdd.emit(newTask);
    this.taskTitle = '';
  }
}
}
