import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //set up object
  @Input({ required: true }) user!: Users;
  @Input({required:true}) selected!:boolean;

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
