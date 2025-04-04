import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskButtonsComponent } from '../task-buttons/task-buttons.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskButtonsComponent ,NgFor,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tasks :any[] =[];

  @Output() taskDelete = new EventEmitter<number>();

  @Output() taskEdit = new EventEmitter<any>();


  deleteTask(idx:number){
    console.log("deleting task" ,idx);
    this.taskDelete.emit(idx);
  }

editTask(task:any){
  const newTitle = prompt ('edit Task' ,task.title);
  if(newTitle) {
    const updateTask = {id:task.id,title:newTitle};
    console.log("update taks " ,updateTask);

    this.taskEdit.emit(updateTask)
  }
}

}
