import { Routes } from '@angular/router';
import { HomeComponent } from './home/component/home.component';
import { UsersComponent } from './users/componentes/users.component';
import { RepositoriesComponent } from './repositories/componentes/repositories.component';
import { RepositoriesDetailComponent } from './repositories/componentes/repositories.detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'repositories', component: RepositoriesComponent },
    { path: 'repositories/:id', component: RepositoriesDetailComponent },

];
