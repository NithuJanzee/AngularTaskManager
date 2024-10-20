import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Header/Header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[HeaderComponent,UserComponent,TaskComponent,BrowserModule]
})
export class AppModule{

}