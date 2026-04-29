import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoriesService } from '../services/repositories.service';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { Repository } from '../models/repositories';
import { CommonModule } from '@angular/common';
import { UserService } from '../../users/services/users.service';
import { User } from '../../users/models/users';

@Component({
  selector: 'app-repositories-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../repositories.detail.component.html',
  styleUrl: '../repositories.detail.component.css'
})
export class RepositoriesDetailComponent {

  repositories$: Observable<Repository | undefined>;
  repositoriesWithOwner$!: Observable<(Repository & { owner?: User }) | null>;


  constructor(
    private route: ActivatedRoute,
    private repositoriesService: RepositoriesService,
    private userService: UserService
  ) {
    this.repositories$ = this.route.paramMap.pipe(
      switchMap(params =>
        this.repositoriesService.getRepositories().pipe(
          map(repos => repos.find(r => r.id === Number(params.get('id'))))
        )
      )
    );

    // 2️⃣ cruzar con usuarios
    this.repositoriesWithOwner$ = combineLatest([
      this.repositories$,
      this.userService.getUsers()
    ]).pipe(
      map(([repo, users]) => {
        if (!repo) return null;

        const owner = users.find(u => u.id === repo.ownerId);

        return {
          ...repo,
          owner
        };
      })
    );
  }
}