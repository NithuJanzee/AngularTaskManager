import { Component } from '@angular/core';
import { HeaderComponent } from './Header/Header.component'; 
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent , UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  onselecetUserr(id:string){
    console.log('the id is =' + id);
  }
}
