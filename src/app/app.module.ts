import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Header/Header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { TasksComponent } from "./task/tasks/tasks.component";
import { NewTasksComponent } from "./task/new-tasks/new-tasks.component";
import { FormsModule } from "@angular/forms";
import { sharedModule } from "./shared/card/shared.module";

@NgModule({
    declarations: [
         AppComponent,
         HeaderComponent, 
         UserComponent,  
         TaskComponent, 
         TasksComponent, 
         NewTasksComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule,FormsModule,sharedModule]
})
export class AppModule {

}