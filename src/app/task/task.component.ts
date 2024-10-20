import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import {type NewTaskData } from './tasks/tasks.model';
import { CardComponent } from "../shared/card/card.component";
import { TaskService } from './task.services'; 



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTasksComponent, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // we want to out put name so we look for input 
  @Input({ required: true }) name!: string
  @Input({ required: true }) UserId!: string
  isAddingTask = false;

  constructor(private taskService:TaskService) {}

//  private taskService = new TaskService();
  

  get SelectedUserId() {
    return this.taskService.getUserTask(this.UserId);
  }

  onStartAddTask() {
    this.isAddingTask = true; 
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  }
}
