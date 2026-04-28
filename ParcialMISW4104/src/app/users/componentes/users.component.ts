import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/users';
import { UserService } from '../services/users.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: '../users.component.html',
  styleUrl: '../users.component.css',
})
export class UsersComponent {
   users$: Observable<User[]>;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}