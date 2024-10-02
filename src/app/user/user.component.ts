import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: String;
  @Input({ required: true }) name!: string;
  //emit the data
  @Output() Select = new EventEmitter();


  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() { 
    this.Select.emit(this.id) 
  }
}
