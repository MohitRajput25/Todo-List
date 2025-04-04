import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-buttons',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-buttons.component.html',
  styleUrl: './task-buttons.component.css'
})
export class TaskButtonsComponent {

  @Input() label:string = '';
  
  @Input() icon?: string;

  @Input() disabled: boolean = false;

 
}
