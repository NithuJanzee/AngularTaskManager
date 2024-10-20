import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { sharedModule } from "../shared/card/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TaskComponent,TasksComponent,NewTasksComponent],
    exports:[TaskComponent],
    imports:[CommonModule,FormsModule,sharedModule]
})
export class taskModule{

}