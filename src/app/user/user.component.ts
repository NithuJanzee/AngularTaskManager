import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //set up object
@Input({required:true}) user!:{
  id:string,
  name:string,
  avatar:string
}
  //emit the data
  @Output() Select = new EventEmitter();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //i only emit the user id
  //when i click event happen
  onSelectUser() { 
    this.Select.emit(this.user.id) 
  }
}
