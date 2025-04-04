import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskButtonsComponent } from './components/task-buttons/task-buttons.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskButtonsComponent,TaskInputComponent,TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
tasks:any[] =[];

addTask(task:any){
  this.tasks.push(task);

}

deleteTask(idx:number){
  this.tasks.splice(idx,1)
}

editTask(updateTask:any){
  const idx = this.tasks.findIndex(task=>task.id ===updateTask.id);
  if(idx !== -1){
    this.tasks[idx] =updateTask;
  }
}
}
