import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../tasks/tasks.model';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Output() Cancel = new EventEmitter<void>(); 
  @Output() add = new EventEmitter<NewTaskData>();  //emit the tittle summary date check task.modules 
  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  oncancel(){
    this.Cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    });
  }
}
