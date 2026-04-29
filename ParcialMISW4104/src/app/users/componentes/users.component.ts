import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/users';
import { UserService } from '../services/users.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { UsersDetailComponent } from './users.detail.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule, UsersDetailComponent],
  templateUrl: '../users.component.html',
  styleUrl: '../users.component.css'
})
export class UsersComponent {
  users$: Observable<User[]>;
  selectedUser: User | null = null;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
  selectUser(user: User) {
    this.selectedUser = user;
  }
}