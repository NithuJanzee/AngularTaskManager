import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Output() Cancel = new EventEmitter<void>(); 
  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  oncancel(){
    this.Cancel.emit();
  }

  onSubmit(){
    
  }
}
