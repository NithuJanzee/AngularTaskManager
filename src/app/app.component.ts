import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  //first we give defalult value for selected user
  selectedUserId?:string;
  
  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId);
  }


 // when even happen this get the id that emit from the user commponent
  onselecetUser(id:string){
    //when the event happen we catch the id and change the default value
    this.selectedUserId=id;
  }
}
