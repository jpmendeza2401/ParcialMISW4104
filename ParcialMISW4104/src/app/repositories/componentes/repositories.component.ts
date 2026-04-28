import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository} from '../models/repositories';
import { RepositoriesService } from '../services/repositories.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: '../repositories.component.html',
  styleUrl: '../repositories.component.css',
})
export class RepositoriesComponent {
   repositories$: Observable<Repository[]>;
  constructor(private repositoriesService: RepositoriesService) {
    this.repositories$ = this.repositoriesService.getRepositories();
  }
}