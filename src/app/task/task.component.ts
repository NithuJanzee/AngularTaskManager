import { Component , Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 // we want to out put name so we look for input 
  @Input() name?:string
}
