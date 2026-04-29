import { Component, Input } from '@angular/core';
import { User } from '../models/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../users.detail.component.html',
  styleUrl: '../users.detail.component.css'
})
export class UsersDetailComponent {
  @Input() user: User | null = null;
}