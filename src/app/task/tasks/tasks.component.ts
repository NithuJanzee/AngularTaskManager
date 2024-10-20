import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { Task } from './tasks.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.services';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) task!: Task

  private taskService = inject(TaskService)

  onCompleteTask(){
   this.taskService.removeTask(this.task.id)
  }
}
