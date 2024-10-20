import { Component, EventEmitter, inject, Input, input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../tasks/tasks.model';
import { TaskService } from '../task.services';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Input({required:true})UserId!:string;
  @Output() Close = new EventEmitter<void>(); 
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  private taskService =   inject(TaskService)

  oncancel(){
    this.Close.emit();
  }

  onSubmit(){
    this.taskService.AddTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate 
    },this.UserId)
    this.Close.emit();
  }
}
